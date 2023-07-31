import { html } from 'lit-html';
import Image from '../images/defaultRecipeImage.jpg';

const defaultImageUrl = Image;

export const recipeBlock = (recipe) => html`
    <div class="card">
        ${!recipe.imageUrl ? 
            html`<img class="card-img-top" src="${defaultImageUrl}" alt="Recipe image">` :
            html`<img class="card-img-top" src="${recipe.imageUrl}" alt="Recipe image">`
        }
        <div class="card-body">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text">${recipe.description}</p>
        </div>
        <div class="card-footer card-actions">
            <small>Created on: ${recipe.createdOn}</small>
            <a href="/edit/${recipe._id}" class="btn btn-primary float-end">Edit</a>
        </div>
    </div>
`;