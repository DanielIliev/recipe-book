import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';
import { navTrigger } from '../utils/util.js';

export const layoutView = (content) => html`
    <nav aria-label="primary menu" role="navigation">
        <a href="/" class="brand">${localeEnglish.navigation.logoLinkText}</a>
        <ul class="nav-menu">
        <li class="nav-item">
            <a href="/add"  @click='${navTrigger}' class="nav-link">${localeEnglish.navigation.addLinkText}</a>
        </li>
        <li class="nav-item">
            <a href="/recipes" @click='${navTrigger}' class="nav-link">${localeEnglish.navigation.recipesLinkText}</a>
        </li>
        <li class="nav-item">
            <a href="/about" @click='${navTrigger}' class="nav-link">${localeEnglish.navigation.aboutLinkText}</a>
        </li>
        </ul>
        <div class="hamburger" @click='${navTrigger}'>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    ${content}
`;