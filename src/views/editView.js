import { html } from '../../node_modules/lit-html/lit-html.js';

export const editRecipeTemplate = (recipe, onEdit) => html`
    <div class="editForm">
        <form id="edit-recipe" @submit="${onEdit}">
            <label>
                Title: <input type="text" name="title" .value="${recipe.title}">
            </label>
            <label>
                Description: <textarea name="description" .value="${recipe.description}"></textarea>
            </label>
            <button type="submit">Publish</button>
        </form>
    </div>
`;