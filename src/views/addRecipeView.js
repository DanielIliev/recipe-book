import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const addRecipeTemplate = (onAdd) => html`
    <div class="container">
        <form @submit="${onAdd}" class="form">
            <fieldset>
                <legend>Recipe information</legend>
                <div class="mb-3">
                    <label for="title" class="form-label">${localeEnglish.formFields.title}</label>
                    <input type="text" class="form-control" id="title" name="title" maxlength="25" placeholder="Recipe title..." />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">${localeEnglish.formFields.description}</label>
                    <textarea class="form-control" id="description" name="description" maxlength="300" placeholder="Recipe description..."></textarea>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">${localeEnglish.formFields.image}</label>
                    <input type="text" class="form-control" id="image" name="imageUrl" />
                </div>
            </fieldset>
            <button type="submit" class="btn btn-primary float-end">Submit</button>
        </form>
    </div>
`;