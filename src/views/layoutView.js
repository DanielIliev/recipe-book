import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';

export const layoutView = (content) => html`
    <nav>
        <a href="/" id="brand">${localeEnglish.navigation.logoLinkText}</a>
        <ul>
            <li>
                <a class="desktop-links" href="/add">${localeEnglish.navigation.addLinkText}</a>
                <a class="mobile-links" href="/add">
                    <i class="ph-light ph-plus"></i>
                </a>
            </li>
            <li>
                <a class="desktop-links" href="/recipes">${localeEnglish.navigation.recipesLinkText}</a>
                <a class="mobile-links" href="/recipes">
                    <i class="ph-light ph-notebook"></i>
                </a>
            </li>
            <li>
                <a class="desktop-links" href="/about">${localeEnglish.navigation.aboutLinkText}</a>
                <a class="mobile-links" href="/about">
                    <i class="ph-light ph-info"></i>
                </a>
            </li>
        </ul>
    </nav>

    <main>${content}</main>
`;