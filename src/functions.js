import { Comment } from './data.js';

function loadSchema(schema) {
    const message = schema ? "L'objet JSON est récupéré :" : "L'objet JSON n'est pas récupéré !";
    console.log(message, schema);
}

loadSchema(Comment.name);