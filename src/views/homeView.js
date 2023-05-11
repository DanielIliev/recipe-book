import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';
import { recipeBlock } from '../partials/recipeBlock.js';

export const homeTemplate = (recipes) => html`
    <section id="home">
        <h1>${localeEnglish.home.title}</h1>
        <hr>
        ${recipes.length !== 0 ? html`
            <h3>${localeEnglish.home.description}</h3>
                ${recipes.map((recipe) => html`
                    ${recipeBlock(recipe)}
                `)}
        ` : html`
            <h2>${localeEnglish.home.noRecipes}</h2>
        `}
    </section>
`;