import { getRecipes } from "../services/recipeService.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    let recipes = await getRecipes();

    console.log(recipes);

    ctx.render(recipesTemplate(recipes));
}