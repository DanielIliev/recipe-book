import { html } from 'lit-html';
import { localeEnglish } from '../data/localization.js';

export const homeTemplate = () => html`
    <section id="home">
        <h1>${localeEnglish.home.title}</h1>
        <h4>${localeEnglish.home.description}</h4>
        To get started simply <a href="/add">click here</a> to add a recipe or <a href="/recipes">here</a> to view the available ones.
    </section>
`;