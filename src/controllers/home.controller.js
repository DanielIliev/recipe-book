import { getLatestRecipes } from "../data/recipeModel.js";
import { homeTemplate } from "../views/homeView.js";

export async function homeController(ctx) {
    const recipes = await getLatestRecipes();

    ctx.render(homeTemplate(recipes));
}