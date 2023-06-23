import { editRecipe, getOneRecipe } from "../services/recipeService.js";
import { createSubmitHandler } from "../utils/util.js";
import { editRecipeTemplate } from "../views/editView.js";

export async function editRecipeController(ctx) {
    const ID = ctx.params.id;
    const DATA = await getOneRecipe(ID);

    ctx.render(editRecipeTemplate(DATA, createSubmitHandler(onEdit)));

    async function onEdit({
        title,
        description,
        imageUrl
    }, form) {
        try {
            await editRecipe({ 'id': ID, title, description, imageUrl });
            form.reset();
            ctx.page.redirect('/recipes');
        } catch (error) {
            return alert(error.message);
        }
    }

    document.getElementById('cancel').addEventListener('click', function(event) {
        event.preventDefault();

        ctx.page.redirect('/recipes');
    })
}