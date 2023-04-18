import { getAllRecipes } from "../data/recipeModel.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    const recipes = await getAllRecipes();

    ctx.render(recipesTemplate(recipes));
}