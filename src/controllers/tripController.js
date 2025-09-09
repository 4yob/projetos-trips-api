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
        const { title, start_date, end_date, created_at } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newTrip = await tripModel.createTrip(photo, title, start_date, end_date, created_at);
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar viagem." });
    }
};

const updateTrip = async (req, res) => {
    const fs = require('fs');
    const path = require('path');
    try {
        const { title, start_date, end_date, created_at } = req.body;
        let photo = null;
        // Buscar viagem atual para pegar foto antiga
        const trip = await tripModel.getTripById(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: "Viagem não encontrada." });
        }
        // Se veio nova foto, remove a antiga
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
        const updatedTrip = await tripModel.updateTrip(req.params.id, photo, title, start_date, end_date, created_at);
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar viagem." });
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

module.exports = { getAllTrips, getTrip, createTrip, updateTrip, deleteTrip };
