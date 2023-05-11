import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, push, ref, set } from "firebase/database";
import { config } from "../../firebase.config";

const app = initializeApp(config);

const endpoints = {
    all: '/recipes'
};

export async function getRecipes() {
    const database = getDatabase();
    const data = await get(child(ref(database), endpoints.all));
    
    if (data.val()) {
        return Object.values(data.val());
    } else {
        return [];
    }
}

// export async function getLatestRecipes() {
//     return await get(endpoints.latest);
// }

// export async function getOneRecipe(id) {
//     return await get(`${endpoints.byId}?id=${id}`);
// }

export async function addRecipe(data) {
    const database = getDatabase();
    const uid = push(child(ref(database), 'recipes')).key;

    await set(ref(database, 'recipes/' + uid), {
        title: data.title,
        description: data.description,
        _id: uid
    });
}

// export async function editRecipe(data) {
//     await put (endpoints.edit, data);
// }

// export async function deleteRecipe(id) {
//     await del(`${endpoints.del}?id=${id}`);
// }