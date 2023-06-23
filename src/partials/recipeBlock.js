import { html } from 'lit-html';

export const recipeBlock = (recipe) => html`
    <div class="recipe-block">
        ${!recipe.imageUrl ? 
            html`<div class="default-recipe-image"></div>` :
            html`<img class="recipe-image" src="${recipe.imageUrl}" alt="recipe image" />`
        }
        <div class="recipe-header">
             <h2>${recipe.title}</h2>
             <a href="/edit/${recipe._id}">
                 <i class="ph-light ph-pencil-simple-line"></i>
             </a>
             <a href="/delete/${recipe._id}">
                 <i class="ph-light ph-trash"></i>
             </a>
        </div>
        <hr>
        <div class="recipe-content">
            <p>${recipe.description}</p>
        </div>
        <hr>
        <div class="recipe-footer">
           <small>Created on: ${recipe.createdOn}</small>
        </div>
    </div>
`;