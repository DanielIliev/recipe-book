import { editRecipe, getOneRecipe } from "../services/recipeService.js";
import { createSubmitHandler } from "../utils/util.js";
import { editRecipeTemplate } from "../views/editView.js";

export async function editRecipeController(ctx) {
    // Need to error handle invalid ID's for recipes
    try {
        const ID = ctx.params.id;
        const data = await getOneRecipe(ID);

        ctx.render(editRecipeTemplate(data, createSubmitHandler(onEdit)));

        document.getElementById('cancel').addEventListener('click', function(event) {
            event.preventDefault();
    
            ctx.page.redirect('/recipes');
        });
    } catch (error) {
        ctx.page.redirect('/');
    }

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
}