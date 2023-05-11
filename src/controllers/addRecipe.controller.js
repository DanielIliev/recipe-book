import { addRecipeTemplate } from "../views/addRecipeView.js";
import { createSubmitHandler } from "../data/util.js";
import { addRecipe } from "../data/recipeModel.js";

export function addRecipeController(ctx) {
    ctx.render(addRecipeTemplate(createSubmitHandler(onAdd)));

    async function onAdd({
        title,
        description
    }, form) {
        if (title == '' || description == '') {
            return alert('All fields are required');
        }

        await addRecipe({ title, description });

        form.reset();
        ctx.page.redirect('/recipes');
    }
}