import { getRecipes } from "../data/recipeModel.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    const recipes = Object.values(await getRecipes());

    ctx.render(recipesTemplate(recipes));
}