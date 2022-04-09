/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import contractInfoDinoUpToken from "contracts/contractInfoDinoUpToken.json";
import ContractResolver from "components/Contract/ContractResolver";

export default function ContractResolverDinoUpToken({ contract, setContract }) {
  return (
    <ContractResolver
      contract={contract}
      setContract={setContract}
      contractInfo={contractInfoDinoUpToken}
    />
  );
}
