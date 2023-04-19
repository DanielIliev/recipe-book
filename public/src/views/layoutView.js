import { html } from '../../../node_modules/lit-html/lit-html.js';

export const layoutView = (content) => html`
    <nav>
        <a href="/" id="brand">RecipeBook</a>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/recipes/add">Add recipe</a>
            </li>
            <li>
                <a href="/recipes">My recipes</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>

    <main>${content}</main>
`;