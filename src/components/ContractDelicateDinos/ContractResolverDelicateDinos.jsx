/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import contractInfoDelicateDinos from "contracts/contractInfoDelicateDinos.json";
import ContractResolver from "components/Contract/ContractResolver";

export default function ContractResolverDelicateDinos({
  contract,
  setContract,
}) {
  return (
    <ContractResolver
      contract={contract}
      setContract={setContract}
      contractInfo={contractInfoDelicateDinos}
    />
  );
}
