import { editRecipe, getOneRecipe } from "../data/recipeModel.js";
import { createSubmitHandler } from "../data/util.js";
import { editRecipeTemplate } from "../views/editView.js";

export async function editRecipeController(ctx) {
    const ID = ctx.params.id;

    const DATA = await getOneRecipe(ID);

    ctx.render(editRecipeTemplate(DATA, createSubmitHandler(onEdit)));

    async function onEdit({
        title,
        description
    }, form) {
        if (title == '' || description == '') {
            return alert('All fields are required');
        }

        const confirmation = confirm('Are you sure?');

        if (confirmation == true) {
            await editRecipe({'id': ID, title, description})
            form.reset();
            ctx.page.redirect('/recipes');
        }
    }
}