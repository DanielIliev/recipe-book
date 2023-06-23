import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const editRecipeTemplate = (recipe, onEdit) => html`
    <section id="edit">
        <div class="form-container">
            <form id="edit-recipe" @submit="${onEdit}">
                <fieldset>
                    <legend>Recipe information</legend>
                    <p>
                        <label for="title">${localeEnglish.formFields.title}</label>
                        <input id="title" name="title" type="text" maxlength="25" .value="${recipe.title}" />
                    </p>
                    <p>
                        <label for="description">${localeEnglish.formFields.description}</label>
                        <textarea id="description" name="description" maxlength="300" .value="${recipe.description}"></textarea>
                    </p>
                    <p>
                        <label for="image">${localeEnglish.formFields.image}</label>
                        <input id="image" name="imageUrl" value="${recipe.imageUrl}" />
                    </p>
                    <button type="button" id="cancel">${localeEnglish.formFields.cancel}</button>
                    <button type="submit">${localeEnglish.formFields.edit}</button>
                </fieldset>
            </form>
        </div>
    </section>
`;