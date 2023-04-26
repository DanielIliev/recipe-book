import { html } from '../../../node_modules/lit-html/lit-html.js';
import { localeEnglish } from '../data/localization.js';

export const aboutTemplate = () => html`
    <h1>${localeEnglish.about.title}</h1>
    <h2>${localeEnglish.about.description}</h2>
    <hr>
    <h5 style="color: red">${localeEnglish.about.warning}</h5>
`;