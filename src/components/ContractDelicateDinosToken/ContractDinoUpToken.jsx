import Contract from "components/Contract/Contract";
import ContractResolverDinoUpToken from "./ContractResolverDinoUpToken";

export default function ContractDinoUpToken() {
  const res = (setContract, contract) => (
    <ContractResolverDinoUpToken
      setContract={setContract}
      contract={contract}
    />
  );
  return <Contract resolver={res} />;
}
