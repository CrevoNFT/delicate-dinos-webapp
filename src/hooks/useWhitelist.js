import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import whitelist from "whitelist/whitelist.json";

export const useWhitelist = () => {
  const whitelistedAddresses = whitelist;
  const leafNodes = whitelistedAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = merkleTree.getRoot();

  return {
    isWhitelisted: (address) => {
      const claimingAddress = keccak256(address);
      const hexProof = merkleTree.getHexProof(claimingAddress);
      return merkleTree.verify(hexProof, claimingAddress, rootHash);
    },
    getHexProof: (address) => {
      const claimingAddress = keccak256(address);
      return merkleTree.getHexProof(claimingAddress);
    },
  };
};
