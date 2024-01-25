import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeData } from "../../services/api";

export default function Details() {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    debugger;
    const fetchRecipe = async () => {
      const data = await getRecipeData(id);
      console.log(data);
      setRecipe(data);
    };
    fetchRecipe();
  }, []);

  let { id } = useParams();

  return (
    <>
      <div>Details</div>
      <p>Recipe id : {id}</p>
      <p>{recipe && recipe.method}</p>
    </>
  );
}
