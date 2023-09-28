import { useParams } from "react-router-dom";

export default function Users() {
  const param = useParams();
  console.log(param);
  return <div className="one_users">
    user number {param.id}</div>;
}
