import React, { useState, useEffect } from "react";
import RecipieCard from "../../components/RecipieCard";
import Grid from "@mui/material/Unstable_Grid2";
import { getAllRecipes } from "../../services/api";
import { Typography} from '@mui/material'

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let allRecipes = await getAllRecipes();
      setRecipes(allRecipes.data);
    };
    getRecipes();
  }, []);



  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <Grid key={recipe.id}>
              <RecipieCard recipe={recipe}/>
            </Grid>
          ))}
        
      </Grid>
      {recipes.length == 0 ? (
          <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <Typography variant="h4" sx={{marginTop : '20px'}}>No recipes to show! Create new recipie</Typography>
          </div>
        ) : null}
    </React.Fragment>
  );
}
