import { html } from 'lit-html';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        <div class="recipe-header">
            <h2>${recipe.title}</h2>
            <a href="/edit/${recipe._id}">
                <i class="ph-light ph-pencil-simple-line"></i>
            </a>
            <a href="/delete/${recipe._id}">
                <i class="ph-light ph-trash"></i>
            </a>
        </div>
        <div class="recipe-content">
            <p>${recipe.description}</p>
        </div>
        <div class="recipe-footer">
            <small>Created on: ${recipe.createdOn}</small>
        </div>
    </div>
`;