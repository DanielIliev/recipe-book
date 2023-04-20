import page from '../../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { layoutView } from './views/layoutView.js';
import { deleteRecipe } from './data/recipeModel.js';
import { homeController } from './controllers/home.controller.js';
import { aboutController } from './controllers/about.controller.js';
import { recipesController } from './controllers/recipes.controller.js';
import { addRecipeController } from './controllers/addRecipe.controller.js';
import { editRecipeController } from './controllers/edit.controller.js';

const root = document.getElementById('wrapper');

page(decorator);
page('/index.html', () => {
    page.redirect('/');
});
page('/', homeController);
page('/recipes', recipesController);
page('/recipes/add', addRecipeController);
page('/recipes/edit/:id', editRecipeController);
page('/recipes/delete/:id', deleteAction);
page('/about', aboutController);
page('*', (ctx) => {
    ctx.page.redirect('/');
})

page.start();

function decorator(ctx, next) {
    ctx.render = renderView;
    
    next();
}

function renderView(content) {
    render(layoutView(content), root);
}

async function deleteAction(ctx) {
    const confirmation = confirm('Are you sure ?');

    if (confirmation == true) {
        await deleteRecipe(ctx.params.id);
        ctx.page.redirect('/recipes');
    }
}