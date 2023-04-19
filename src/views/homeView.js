import { html } from '../../node_modules/lit-html/lit-html.js';
import { recipeBlock } from '../partials/recipeBlock.js';

export const homeTemplate = (recipes) => html`
    <section id="home">
        <h1>Welcome to the Recipe Book!</h1>
        <hr>
        ${recipes.length !== 0 ? html`
            <h3>Latest recipes added are...</h3>
                ${recipes.map((recipe) => html`
                    ${recipeBlock(recipe)}
                `)}
        ` : html`
            <h2>There are no recipes :(</h2>
        `}
    </section>
`;