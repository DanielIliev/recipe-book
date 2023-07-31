import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { config } from "../../firebase.config.js";

const endpoints = {
    all: '/recipes',
}

const app = initializeApp(config);

// Fetch recipes
async function getRecipes() {
    const database = getDatabase();
    const data = await get(child(ref(database), endpoints.all));

    if (!data.val()) {
        return [];
    }

    return Object.values(data.val());
}

// Fetch recipe by ID
async function getOneRecipe(id) {
    const database = getDatabase();
    const data = await get(child(ref(database), endpoints.all + `/${id}`));

    return data.val();
}

// Add recipe
async function addRecipe(data) {
    const { title, description, imageUrl } = data;
    const database = getDatabase();
    const uid = push(child(ref(database), 'recipes')).key;
    const createdOn = generateDate();

    validateInputs(title, description, imageUrl);

    await set(ref(database, endpoints.all + `/${uid}`), {
        title,
        description,
        imageUrl,
        _id: uid,
        createdOn
    });
}

// Edit recipe
async function editRecipe(data) {
    const { title, description, imageUrl } = data;
    const database = getDatabase();
    const uid = data.id;
    const createdOn = generateDate();

    validateInputs(title, description, imageUrl);

    await set(ref(database, endpoints.all + `/${uid}`), {
        title: data.title,
        description: data.description,
        imageUrl,
        _id: uid,
        createdOn
    });
}

// Delete recipe
async function deleteRecipe(id) {
    const database = getDatabase();
    const recordRef = ref(database, endpoints.all + `/${id}`)

    await remove(recordRef);
}

// Helper functions
function generateDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = (currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
}

function validateInputs(title, description, imageUrl) {
    if (title == '') {
        throw new Error('Title field is required!');
    }

    if (description == '') {
        throw new Error('Description field is required!');
    }

    if (title.length > 25) {
        throw new Error('Title must be a maximum of 25 characters!');
    }

    if (description.length > 300) {
        throw new Error('Description must be a maximum of 300 characters!');
    }

    if (imageUrl) {
        const matchHttpPattern = imageUrl.match(/^(http|https):\/\//, 'i');

        if (!matchHttpPattern) {
            throw new Error('Image url must start with http:// or https://');
        }

        if (imageUrl.length > 300) {
            throw new Error('Image url must be a maximum of 300 characters');
        }
    }
}

export {
    getRecipes,
    getOneRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
}