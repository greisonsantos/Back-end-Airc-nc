const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer')
const uploadConfig = require('./config/multer')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);


//req.paramns
//req.query
//req.body
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots/:spot_id/bookings', BookingController.storage);

routes.get('/dashboard', DashboardController.show);


module.exports = routes;