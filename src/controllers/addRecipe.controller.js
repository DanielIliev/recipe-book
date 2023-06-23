import { addRecipeTemplate } from "../views/addRecipeView.js";
import { createSubmitHandler } from "../utils/util.js";
import { addRecipe } from "../services/recipeService.js";

export function addRecipeController(ctx) {
    ctx.render(addRecipeTemplate(createSubmitHandler(onAdd)));

    async function onAdd({
        title,
        description,
        imageUrl
    }, form) {
        try {
            await addRecipe({ title, description, imageUrl });

            form.reset();
            ctx.page.redirect('/recipes');
        } catch (error) {
            return alert(error.message);
        }
    }
}