export const sqlManager = {
    loadSchema: function(schema) {
        const message = schema ? "L'objet JSON est récupéré :" : "L'objet JSON n'est pas récupéré !";
        console.log(message, schema);
    },
    createDatabase: function(name) {
        let query = `CREATE DATABASE IF NOT EXISTS ${name};`;
        return query;
    },
    deleteDatabase: function(name) {
        let query = `DROP DATABASE IF NOT EXISTS ${name};`;
        return query;
    }
};