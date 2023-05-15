import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const addRecipeTemplate = (onAdd) => html`
    <div class="form-container">
        <form id="add-recipe" @submit="${onAdd}">
            <p>
                <label for="title">${localeEnglish.addRecipe.title}</label>
                <input id="title" name="title" type="text" maxlength="25" />
            </p>
            <p>
                <label for="description">${localeEnglish.addRecipe.description}</label>
                <textarea id="description" name="description" maxlength="300"></textarea>
            </p>
            <button type="submit">${localeEnglish.addRecipe.publish}</button>
        </form>
    </div>
`;