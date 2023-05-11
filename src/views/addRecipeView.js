import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';

export const addRecipeTemplate = (onAdd) => html`
    <div class="addForm">
        <form id="add-recipe" @submit="${onAdd}">
            <label>
                ${localeEnglish.addRecipe.title} <input type="text" name="title">
            </label>
            <label>
                ${localeEnglish.addRecipe.description} <textarea name="description"></textarea>
            </label>
            <button type="submit">${localeEnglish.addRecipe.publish}</button>
        </form>
    </div>
`;