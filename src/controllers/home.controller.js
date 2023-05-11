import { getRecipes } from "../data/recipeModel.js";
import { homeTemplate } from "../views/homeView.js";

export async function homeController(ctx) {
    ctx.render(homeTemplate());
}