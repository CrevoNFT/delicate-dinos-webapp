/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import contractInfoDelicateDinosToken from "contracts/contractInfoDelicateDinosToken.json";
import ContractResolver from "components/Contract/ContractResolver";

export default function ContractResolverDelicateDinosToken({
  contract,
  setContract,
}) {
  return (
    <ContractResolver
      contract={contract}
      setContract={setContract}
      contractInfo={contractInfoDelicateDinosToken}
    />
  );
}
