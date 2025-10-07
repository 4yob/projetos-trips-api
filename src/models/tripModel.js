const pool = require("../config/database");

const getTrips = async () => {
    const result = await pool.query("SELECT * FROM trips");
    return result.rows;
};

const getTripById = async (id) => {
    const result = await pool.query("SELECT * FROM trips WHERE id = $1", [id]);
    return result.rows[0];
};

const createTrip = async (photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite = false) => {
    const result = await pool.query(
        "INSERT INTO trips (photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite]
    );
    return result.rows[0];
};

const updateTrip = async (id, photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite) => {
    const result = await pool.query(
        "UPDATE trips SET photo = $1, title = $2, place = $3, country = $4, main_attractions = $5, local_experience = $6, start_date = $7, end_date = $8, is_favorite = $9 WHERE id = $10 RETURNING *",
        [photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite, id]
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

const getFavoriteTrips = async () => {
    const result = await pool.query("SELECT * FROM trips WHERE is_favorite = true");
    return result.rows;
};

const toggleFavorite = async (id) => {
    const result = await pool.query(
        "UPDATE trips SET is_favorite = NOT is_favorite WHERE id = $1 RETURNING *",
        [id]
    );
    return result.rows[0];
};

const setFavorite = async (id, is_favorite) => {
    const result = await pool.query(
        "UPDATE trips SET is_favorite = $1 WHERE id = $2 RETURNING *",
        [is_favorite, id]
    );
    return result.rows[0];
};

module.exports = { 
    getTrips, 
    getTripById, 
    createTrip, 
    updateTrip, 
    deleteTrip,
    getFavoriteTrips,
    toggleFavorite,
    setFavorite 
};
