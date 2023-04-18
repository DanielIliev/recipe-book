import { html } from '../../node_modules/lit-html/lit-html.js';

export const addRecipeTemplate = (onAdd) => html`
    <div class="addForm">
        <form id="add-recipe" @submit="${onAdd}">
            <label>
                Title: <input type="text" name="title">
            </label>
            <label>
                Description: <textarea name="description"></textarea>
            </label>
            <button type="submit">Publish</button>
        </form>
    </div>
`;