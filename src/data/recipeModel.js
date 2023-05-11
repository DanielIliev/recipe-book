import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
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

export async function getOneRecipe(id) {
    const database = getDatabase();
    const data = await get(child(ref(database), endpoints.all + `/${id}`));

    if (data.val()) {
        return data.val();
    } else {
        return [];
    }
}

export async function addRecipe(data) {
    const database = getDatabase();
    const uid = push(child(ref(database), 'recipes')).key;

    await set(ref(database, endpoints.all + `/${uid}`), {
        title: data.title,
        description: data.description,
        _id: uid
    });
}

export async function editRecipe(data) {
    const uid = data.id;
    const database = getDatabase();

    await set(ref(database, endpoints.all + `/${uid}`), {
        title: data.title,
        description: data.description,
        _id: uid
    });
}

export async function deleteRecipe(id) {
    const database = getDatabase();
    const recordRef = ref(database, endpoints.all + `/${id}`)

    await remove(recordRef);
}