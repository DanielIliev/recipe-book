import { html } from 'lit-html';
import Image from '../images/defaultRecipeImage.jpg';

const defaultImageUrl = Image;

export const recipeBlock = (recipe) => html`
    <div class="card">
        ${!recipe.imageUrl ? 
            html`<img class="card-img-top" src="${defaultImageUrl}" alt="Card image cap">` :
            html`<img class="card-img-top" src="${recipe.imageUrl}" alt="Card image cap">`
        }
        <div class="card-body">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text">${recipe.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;

{/* <div class="recipe-block">
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
    </div> */}