import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const editRecipeTemplate = (recipe, onEdit) => html`
    <div class="container">
        <form @submit="${onEdit}" class="form">
            <fieldset>
                <legend>Recipe information</legend>
                <div class="mb-3">
                    <label for="title" class="form-label">${localeEnglish.formFields.title}</label>
                    <input type="text" class="form-control" id="title" name="title" maxlength="25" value="${recipe.title}" placeholder="Recipe title..." />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">${localeEnglish.formFields.description}</label>
                    <textarea class="form-control" id="description" name="description" maxlength="300" placeholder="Recipe description...">${recipe.description}</textarea>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">${localeEnglish.formFields.image}</label>
                    <input type="text" class="form-control" id="image" name="imageUrl" value="${recipe.imageUrl}" />
                </div>
            </fieldset>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary float-end">Edit</button>
                <button type="button" class="btn btn-primary float-end" id="cancel">${localeEnglish.formFields.cancel}</button>
            </div>
        </form>
    </div>
`;

{/* <section id="edit">
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
    </section> */}