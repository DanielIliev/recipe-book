import { html } from 'lit-html';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        <div class="recipe-header">
            <a href="/edit/${recipe._id}">
                <i class="ph-light ph-pencil-simple-line"></i>
            </a>
            <a href="/delete/${recipe._id}">
                <i class="ph-light ph-trash"></i>
            </a>
        </div>
        <div class="recipe-content">
            <h1>${recipe.title}</h1>
            <p>${recipe.description}</p>
        </div>
    </div>
`;