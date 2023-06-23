import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const aboutTemplate = () => html`
    <section id="about">
        <h1>${localeEnglish.about.title}</h1>
        <h2>${localeEnglish.about.description}</h2>
        <hr>
        <h5 style="color: red">${localeEnglish.about.warning}</h5>
    </section>
`;