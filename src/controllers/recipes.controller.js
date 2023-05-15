import { db } from "../database/recipeModel.js";
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