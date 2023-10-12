import axiosClient from "../axiosClient";

export async function searchMeals({ commit }, keyword) {
  try {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
}
