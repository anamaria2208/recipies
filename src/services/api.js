
const BASE_URL = 'http://localhost:3000'

export const getAllRecipes = async () => {
    try {
        const response = await axios.get(BASE_URL + '/recipes');
        return response
      } catch (error) {
        console.error(error);
      }
}

