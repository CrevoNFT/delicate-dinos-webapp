import Contract from "components/Contract/Contract";
import ContractResolverDelicateDinosToken from "./ContractResolverDelicateDinosToken";

export default function ContractDelicateDinosToken() {
  const res = (setContract, contract) => (
    <ContractResolverDelicateDinosToken
      setContract={setContract}
      contract={contract}
    />
  );
  return <Contract resolver={res} />;
}
