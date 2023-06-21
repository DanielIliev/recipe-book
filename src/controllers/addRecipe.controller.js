import { addRecipeTemplate } from "../views/addRecipeView.js";
import { createSubmitHandler } from "../utils/util.js";
import { db } from "../database/recipeService.js";

export function addRecipeController(ctx) {
    ctx.render(addRecipeTemplate(createSubmitHandler(onAdd)));

    async function onAdd({
        title,
        description
    }, form) {
        if (title == '' || description == '') {
            return alert('All fields are required');
        }

        await db.addRecipe({ title, description });

        form.reset();
        ctx.page.redirect('/recipes');
    }
}