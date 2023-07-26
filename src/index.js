// SCSS files
import './styles/main.scss';
import './styles/recipes.scss';
import './styles/formStyling.scss';
import './styles/navigation.scss';
import 'bootstrap';

// Custom libs
import 'phosphor-icons';

// Routing and functionality
import page from 'page';
import { render } from 'lit-html';
import { homeController } from './controllers/home.controller.js';
import { layoutView } from './views/layoutView.js';
import { aboutController } from './controllers/about.controller.js';
import { addRecipeController } from './controllers/addRecipe.controller.js';
import { recipesController } from './controllers/recipes.controller.js';
import { editRecipeController } from './controllers/edit.controller.js';
import { deleteRecipe } from './services/recipeService.js';

const root = document.getElementById('wrapper');

page(decorator);
page('/index.html', () => {
    page.redirect('/');
});
page('/', homeController);
page('/add', addRecipeController);
page('/edit/:id', editRecipeController);
page('/delete/:id', deleteAction);
page('/recipes', recipesController);
page('/about', aboutController);
page('*', (ctx) => {
    ctx.page.redirect('/');
});

page.start();

function decorator(ctx, next) {
    ctx.render = renderView;

    next();
}

function renderView(content) {
    render(layoutView(content), root);
}

async function deleteAction(ctx) {
    const confirmation = confirm('Are you sure you want to delete the recipe?');

    if (confirmation == true) {
        await deleteRecipe(ctx.params.id);
    }

    ctx.page.redirect('/recipes');
}