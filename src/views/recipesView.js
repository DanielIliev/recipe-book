import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';
import { recipeBlock } from '../partials/recipeBlock.js';

export const recipesTemplate = (recipes) => html`
    <section id="recipes">
    ${(recipes.length === 0) ?
        html`
            <h2>${localeEnglish.recipes.empty}</h2>
        ` :
        html`
            ${recipes.map(recipe => recipeBlock(recipe))}
        `
    }
    </section>
`;