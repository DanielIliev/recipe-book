import { getRecipes } from "../data/recipeModel.js";
import { homeTemplate } from "../views/homeView.js";

export async function homeController(ctx) {
    const recipes = Object.values(await getRecipes());

    ctx.render(homeTemplate(recipes));
}