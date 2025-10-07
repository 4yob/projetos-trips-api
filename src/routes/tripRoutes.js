const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");
const upload = require("../config/upload.js");

router.get("/trips", tripController.getAllTrips);
router.get("/trips/favorites", tripController.getFavoriteTrips);
router.get("/trips/:id", tripController.getTrip);
router.post("/trips", upload.single("photo"), tripController.createTrip);
router.put("/trips/:id", upload.single("photo"), tripController.updateTrip);
router.delete("/trips/:id", tripController.deleteTrip);

router.patch("/trips/:id/togglefavorite", tripController.toggleFavorite);
router.patch("/trips/:id/setfavorite", tripController.setFavorite);

module.exports = router;