import { html } from '../../../node_modules/lit-html/lit-html.js';
import { recipeBlock } from '../partials/recipeBlock.js';

export const recipesTemplate = (recipes) => html`
    <section id="recipes">
        ${recipes.length !== 0 ? html`
            <h1>These are the available recipes</h1>
            <hr>
            ${recipes.map((recipe) => html`
                ${recipeBlock(recipe)}
            `)}
        ` : html`
            <h2>There are no recipes :(</h2>
        `}
    </section>
`;