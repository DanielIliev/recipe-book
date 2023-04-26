import { html } from '../../../node_modules/lit-html/lit-html.js';
import { localeEnglish } from '../data/localization.js';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        <div class="recipe-actions">
            <a href="/recipes/edit/${recipe._id}">
                <img src="../../images/icons/edit.svg" alt="options" />
            </a>
            <a href="/recipes/delete/${recipe._id}">
                <img src="../../images/icons/delete.svg" alt="options" />
            </a>
        </div>
        <div class="recipe-content">
            <h1>${localeEnglish.recipeBlock.title} ${recipe.title}</h1>
            <p>${localeEnglish.recipeBlock.description} ${recipe.description}</p>
            <p>${localeEnglish.recipeBlock.author} ${recipe.author}</p>
        </div>
    </div>
`;