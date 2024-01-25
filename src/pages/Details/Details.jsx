import { useParams} from "react-router-dom";

export default function Details() {

  let { id } = useParams();


  return (
    <>
      <div>Details</div>
      <p>Recipe id : {id}</p>
    </>
  );
}
