import { Comment } from './data.js';

function loadSchema(schema) {
    const message = schema ? "L'objet JSON est récupéré :" : "L'objet JSON n'est pas récupéré !";
    console.log(message, schema);
}

function createDatabase(name) {
    let query = `CREATE DATABASE IF NOT EXISTS ${name};`;
    return query;
}

function deleteDatabase(name) {
    let query = `DROP DATABASE IF NOT EXISTS ${name};`;
    return query;
}

export const sqlCraft = {
    SELECT: function(columns, table, condition) {
        let query = "SELECT ";

        if (columns && columns.length > 0) {
            if (columns === "all") {
                query += "*";
            }
            else {
                query += columns;
            }
        } else {
            query += "*";
        }

        if (table && table.length > 0) {
            query += ` FROM ${table}`;
        }

        if (condition) {
            query += " WHERE " + condition;
        }

        return query + ";";
    },
    DELETE: function(table, condition) {
        let query = "DELETE FROM " + table;

        if (condition) {
            query += " WHERE " + condition;
        }

        return query + ";";
    },
    UPDATE: function(table, updates, condition) {
        let query = "UPDATE " + table + " SET " + updates

        if (condition) {
            query += " WHERE " + condition;
        }

        return query + ";";
    }
};