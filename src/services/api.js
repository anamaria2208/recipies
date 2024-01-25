import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAllRecipes = async () => {
  debugger;
  try {
    const response = await axios.get(BASE_URL + "/recipes");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeData = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    confirm.error(error);
  }
};
