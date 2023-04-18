import { del, get, post, put } from "./api.js";

const endpoints = {
    all: '/recipes',
    byId: '/recipe/',
    add: '/recipes/add',
    edit: '/recipes/edit',
    del: '/recipes/delete/',
    latest: '/'
};

export async function getAllRecipes() {
    return await get(endpoints.all);
}

export async function getLatestRecipes() {
    return await get(endpoints.latest);
}

export async function getOneRecipe(id) {
    return await get(`${endpoints.byId}?id=${id}`);
}

export async function addRecipe(data) {
    await post(endpoints.add, data);
}

export async function editRecipe(data) {
    await put (endpoints.edit, data);
}

export async function deleteRecipe(id) {
    await del(`${endpoints.del}?id=${id}`);
}