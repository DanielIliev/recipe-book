import { html } from '../../node_modules/lit-html/lit-html.js';

export const homeTemplate = (recipes) => html`
    <section id="home">
        <h1>Welcome to the Recipe Book!</h1>
        <hr>
        ${recipes.length !== 0 ? html`
            <h3>Latest recipes added are...</h3>
                ${recipes.map((recipe) => html`
                <div class="recipe-block">
                    <div class="recipe-actions">
                        <a href="/recipes/edit/${recipe._id}">
                            <span class="material-symbols-outlined">
                                edit_square
                            </span>
                        </a>
                        <a href="/recipes/delete/${recipe._id}">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </a>
                    </div>
                    <div class="recipe-content">
                        <h1>Recipe: ${recipe.title}</h1>
                        <p>How to: ${recipe.description}</p>
                        <p>Author: ${recipe.author}</p>
                    </div>
                </div>
                `)}
        ` : html`
            <h2>There are no recipes :(</h2>
        `}
    </section>
`;