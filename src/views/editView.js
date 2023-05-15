import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const editRecipeTemplate = (recipe, onEdit) => html`
    <div class="form-container">
        <form id="edit-recipe" @submit="${onEdit}">
            <label>
                ${localeEnglish.editRecipe.title} <input type="text" name="title" .value="${recipe.title}" maxlength="25" />
            </label>
            <label>
                ${localeEnglish.editRecipe.description} <textarea name="description" .value="${recipe.description}" maxlength="300"></textarea>
            </label>
            <button type="submit">${localeEnglish.editRecipe.edit}</button>
        </form>
    </div>
`;