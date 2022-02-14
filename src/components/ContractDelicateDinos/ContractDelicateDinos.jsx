import Contract from "components/Contract/Contract";
import ContractResolverDelicateDinos from "./ContractResolverDelicateDinos";

export default function ContractDelicateDinos() {
  const res = (setContract, contract) => (
    <ContractResolverDelicateDinos
      setContract={setContract}
      contract={contract}
    />
  );
  return <Contract resolver={res} />;
}
