import { getRecipes } from "../data/recipeModel.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    const recipes = await getRecipes();

    ctx.render(recipesTemplate(recipes));
}