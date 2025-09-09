const pool = require("../config/database");

const getTrips = async () => {
    const result = await pool.query("SELECT * FROM trips");
    return result.rows;
};

const getTripById = async (id) => {
    const result = await pool.query("SELECT * FROM trips WHERE id = $1", [id]);
    return result.rows[0];
};

const createTrip = async (photo, title, place, country, start_date, end_date, created_at) => {
    const result = await pool.query(
        "INSERT INTO trips (photo, title, place, country, start_date, end_date, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [photo, title, place, country, start_date, end_date, created_at]
    );
    return result.rows[0];
};

const updateTrip = async (id, photo, title, place, country, start_date, end_date, created_at) => {
    const result = await pool.query(
        "UPDATE trips SET photo = $1, title = $2, place = $3, country = $4, start_date = $5, end_date = $6, created_at = $7 WHERE id = $8 RETURNING *",
        [photo, title, place, country, start_date, end_date, created_at, id]
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
