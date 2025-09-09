const pool = require("../config/database");

const getTrips = async () => {
    const result = await pool.query("SELECT * FROM trips");
    return result.rows;
};

const getTripById = async (id) => {
    const result = await pool.query("SELECT * FROM trips WHERE id = $1", [id]);
    return result.rows[0];
};

const createTrip = async (photo, title, start_date, end_date, created_at) => {
    const result = await pool.query(
        "INSERT INTO trips (photo, title, start_date, end_date, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [photo, title, start_date, end_date, created_at]
    );
    return result.rows[0];
};

const updateTrip = async (id, photo, title, start_date, end_date, created_at) => {
    const result = await pool.query(
        "UPDATE trips SET photo = $1, title = $2, start_date = $3, end_date = $4, created_at = $5 WHERE id = $6 RETURNING *",
        [photo, title, start_date, end_date, created_at, id]
    );
    return result.rows[0];
};

const deleteTrip = async (id) => {
    const result = await pool.query("DELETE FROM trips WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Viagem não encontrada." };
    }

    return { message: "Viagem deletada com sucesso." };
};

module.exports = { getTrips, getTripById, createTrip, updateTrip, deleteTrip };
