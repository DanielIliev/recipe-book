import './styles/main.scss';
import './styles/layout.scss';
import './styles/common.scss';
import page from 'page';
import { render } from 'lit-html';
import { homeController } from './controllers/home.controller';
import { layoutView } from './views/layoutView';
import { aboutController } from './controllers/about.controller';
import { addRecipeController } from './controllers/addRecipe.controller';
import { recipesController } from './controllers/recipes.controller';
import { editRecipeController } from './controllers/edit.controller';
import { deleteRecipe } from './data/recipeModel';

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