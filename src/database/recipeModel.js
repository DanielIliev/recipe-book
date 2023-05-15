import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { config } from "../../firebase.config.js";

const app = initializeApp(config);

class DatabaseActions {

    endpoints = {
        all: '/recipes'
    }

    constructor() {}

    async getRecipes() {
        const database = getDatabase();
        const data = await get(child(ref(database), this.endpoints.all));

        return data.val();
    }

    async getOneRecipe(id) {
        const database = getDatabase();
        const data = await get(child(ref(database), this.endpoints.all + `/${id}`));

        return data.val();
    }

    async addRecipe(data) {
        const database = getDatabase();
        const uid = push(child(ref(database), 'recipes')).key;

        await set(ref(database, this.endpoints.all + `/${uid}`), {
            title: data.title,
            description: data.description,
            _id: uid
        });
    }

    async editRecipe(data) {
        const database = getDatabase();
        const uid = data.id;

        await set(ref(database, this.endpoints.all + `/${uid}`), {
            title: data.title,
            description: data.description,
            _id: uid
        });
    }

    async deleteRecipe(id) {
        const database = getDatabase();
        const recordRef = ref(database, this.endpoints.all + `/${id}`)

        await remove(recordRef);
    }
}

export const db = new DatabaseActions();