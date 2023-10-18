export const sqlCraft = {
    SELECT: function(table, columns, condition) {
        let query = "SELECT ";

        if (columns && columns.length > 0) {
            query += columns.join(", ");
        } else {
            query += "*";
        }

        query += " FROM " + table;

        if (condition) {
            query += " WHERE " + condition;
        }

        return query;
    },
    DELETE: function(table, condition) {
        let query = "DELETE FROM " + table;

        if (condition) {
            query += " WHERE " + condition;
        }

        return query;
    },
    UPDATE: function(table, updates, condition) {
        let query = "UPDATE " + table + " SET " + updates

        if (condition) {
            query += " WHERE " + condition;
        }

        return query;
    }
};