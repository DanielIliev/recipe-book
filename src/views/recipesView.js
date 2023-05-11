import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';
import { recipeBlock } from '../partials/recipeBlock.js';

export const recipesTemplate = (recipes) => html`
    <section id="recipes">
        ${recipes.length !== 0 ? html`
            <h1>${localeEnglish.recipes.title}</h1>
            <hr>
            ${recipes.map((recipe) => html`
                ${recipeBlock(recipe)}
            `)}
        ` : html`
            <h2>${localeEnglish.recipes.noRecipes}</h2>
        `}
    </section>
`;