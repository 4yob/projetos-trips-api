const tripModel = require("../models/tripModel");

const getAllTrips = async (req, res) => {
    try {
        const trips = await tripModel.getTrips();
        res.json(trips);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar viagens." });
    }
};

const getTrip = async (req, res) => {
    try {
        const trip = await tripModel.getTripById(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: "Viagem não encontrado." });
        }
        res.json(trip);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar viagem." });
    }
};

const createTrip = async (req, res) => {
    try {
        const { title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newTrip = await tripModel.createTrip(photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite);
        res.status(201).json(newTrip);
    } catch (error) {
        console.error("Erro ao criar viagem:", error);
        res.status(500).json({ message: "Erro ao criar viagem.", error: error.message });
    }
};

const updateTrip = async (req, res) => {
    const fs = require('fs');
    const path = require('path');
    try {
        const { title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite } = req.body;
        let photo = null;
        const trip = await tripModel.getTripById(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: "Viagem não encontrada." });
        }
        if (req.file) {
            photo = req.file.filename;
            if (trip.photo) {
                const oldPhotoPath = path.join(__dirname, '../../uploads/', trip.photo);
                if (fs.existsSync(oldPhotoPath)) {
                    fs.unlinkSync(oldPhotoPath);
                }
            }
        } else {
            photo = trip.photo;
        }
        const updatedTrip = await tripModel.updateTrip(req.params.id, photo, title, place, country, main_attractions, local_experience, start_date, end_date, is_favorite);
        res.json(updatedTrip);
    } catch (error) {
        console.error("Erro ao atualizar viagem:", error);
        res.status(500).json({ message: "Erro ao atualizar viagem.", error: error.message });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const message = await tripModel.deleteTrip(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar viagem." });
    }
};

const getFavoriteTrips = async (req, res) => {
    try {
        const favoriteTrips = await tripModel.getFavoriteTrips();
        res.json(favoriteTrips);
    } catch (error) {
        console.error("Erro ao buscar viagens favoritas:", error);
        res.status(500).json({ message: "Erro ao buscar viagens favoritas.", error: error.message });
    }
};

const toggleFavorite = async (req, res) => {
    try {
        const updatedTrip = await tripModel.toggleFavorite(req.params.id);
        if (!updatedTrip) {
            return res.status(404).json({ message: "Viagem não encontrada." });
        }
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ message: "Erro ao alterar status de favorito." });
    }
};

const setFavorite = async (req, res) => {
    try {
        const { is_favorite } = req.body;
        const updatedTrip = await tripModel.setFavorite(req.params.id, is_favorite);
        if (!updatedTrip) {
            return res.status(404).json({ message: "Viagem não encontrada." });
        }
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ message: "Erro ao definir favorito." });
    }
};

module.exports = { 
    getAllTrips, 
    getTrip, 
    createTrip, 
    updateTrip, 
    deleteTrip,
    getFavoriteTrips,
    toggleFavorite,
    setFavorite 
};
