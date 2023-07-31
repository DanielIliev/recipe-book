import { getRecipes } from "../services/recipeService.js";
import { recipesTemplate } from "../views/recipesView.js";

export async function recipesController(ctx) {
    try {
        const recipes = await getRecipes();

        return ctx.render(recipesTemplate(recipes));
    } catch (error) {
        return ctx.page.redirect('/');
    }
}