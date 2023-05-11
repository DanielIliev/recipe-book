import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        <div class="recipe-actions">
            <a href="javascript:void(0)">
                <!-- <img src="../images/icons/edit.svg" alt="options" /> -->
                Edit
            </a>
            <a href="javascript:void(0)">
                <!-- <img src="../images/icons/delete.svg" alt="options" /> -->
                Delete
            </a>
        </div>
        <hr>
        <div class="recipe-content">
            <h1>${localeEnglish.recipeBlock.title} ${recipe.title}</h1>
            <p>${localeEnglish.recipeBlock.description} ${recipe.description}</p>
        </div>
    </div>
`;