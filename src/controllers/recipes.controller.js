import { db } from "../database/recipeService.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    let recipes = await db.getRecipes();

    if (recipes) {
        recipes = Object.values(recipes);
    } else {
        recipes = [];
    }

    ctx.render(recipesTemplate(recipes));
}