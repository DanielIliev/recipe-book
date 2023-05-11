import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        <div class="recipe-actions">
            <a class="edit-btn" href="/edit/${recipe._id}">
                Edit
            </a>
            <a class="delete-btn" href="/delete/${recipe._id}">
                Delete
            </a>
        </div>
        <div class="recipe-content">
            <h1>${localeEnglish.recipeBlock.title} ${recipe.title}</h1>
            <p>${localeEnglish.recipeBlock.description} ${recipe.description}</p>
        </div>
    </div>
`;