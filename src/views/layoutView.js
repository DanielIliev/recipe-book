import { html } from 'lit-html';
import { localeEnglish } from '../localizations/localization.js';
import { navTrigger } from '../utils/util.js';

export const layoutView = (content) => html`
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Recipe Book</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="/add" class="nav-link" aria-current="page">${localeEnglish.navigation.addLinkText}</a>
                    </li>
                    <li class="nav-item">
                        <a href="/recipes" class="nav-link" aria-current="page">${localeEnglish.navigation.recipesLinkText}</a>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link" aria-current="page">${localeEnglish.navigation.aboutLinkText}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
${content}
`;


{/* <nav aria-label="primary menu" role="navigation">
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
    </nav> */}