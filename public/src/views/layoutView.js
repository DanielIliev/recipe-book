import { html } from '../../../node_modules/lit-html/lit-html.js';
import { localeEnglish } from '../data/localization.js';

export const layoutView = (content) => html`
    <nav>
        <a href="/" id="brand">${localeEnglish.navigation.logoLinkText}</a>
        <ul>
            <li>
                <a href="/">${localeEnglish.navigation.homeLinkText}</a>
            </li>
            <li>
                <a href="/recipes/add">${localeEnglish.navigation.addLinkText}</a>
            </li>
            <li>
                <a href="/recipes">${localeEnglish.navigation.recipesLinkText}</a>
            </li>
            <li>
                <a href="/about">${localeEnglish.navigation.aboutLinkText}</a>
            </li>
        </ul>
    </nav>

    <main>${content}</main>
`;