import { html } from '../../../node_modules/lit-html/lit-html.js';
import { localeEnglish } from '../data/localization.js';

export const editRecipeTemplate = (recipe, onEdit) => html`
    <div class="editForm">
        <form id="edit-recipe" @submit="${onEdit}">
            <label>
                ${localeEnglish.editRecipe.title} <input type="text" name="title" .value="${recipe.title}">
            </label>
            <label>
                ${localeEnglish.editRecipe.description} <textarea name="description" .value="${recipe.description}"></textarea>
            </label>
            <button type="submit">${localeEnglish.editRecipe.edit}</button>
        </form>
    </div>
`;