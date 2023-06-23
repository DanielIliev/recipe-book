import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const addRecipeTemplate = (onAdd) => html`
    <section id="add">
        <div class="form-container">
            <form id="add-recipe" @submit="${onAdd}">
                <fieldset>
                    <legend>Recipe information</legend>
                    <p>
                        <label for="title">${localeEnglish.formFields.title}</label>
                        <input id="title" name="title" type="text"  maxlength="25" />
                    </p>
                    <p>
                        <label for="description">${localeEnglish.formFields.description}</label>
                        <textarea id="description" name="description"  maxlength="300"></textarea>
                    </p>
                    <p>
                        <label for="image">${localeEnglish.formFields.image}</label>
                        <input id="image" name="imageUrl" />
                    </p>
                    <button type="submit">${localeEnglish.formFields.publish}</button>
                </fieldset>
            </form>
        </div>
    </section>
`;