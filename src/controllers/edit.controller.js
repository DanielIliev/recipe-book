import { editRecipe, getOneRecipe, deleteRecipe } from "../services/recipeService.js";
import { createSubmitHandler } from "../utils/util.js";
import { editRecipeTemplate } from "../views/editView.js";

export async function editRecipeController(ctx) {
    const ID = ctx.params.id;

    try {
        const data = await getOneRecipe(ID);

        ctx.render(editRecipeTemplate(data, createSubmitHandler(onEdit), deleteAction));

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

    async function deleteAction() {
        const confirmation = confirm('Are you sure you want to delete the recipe?');
    
        if (confirmation == true) {
            await deleteRecipe(ID);
        }
    }
}