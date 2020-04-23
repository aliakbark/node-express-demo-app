const express = require('express');
const router = express.Router();

const restaurant_controller = require('../controllers/restaurant.controller');

//Web app routes
router.get('/', restaurant_controller.all_restaurants);
router.get('/join', restaurant_controller.join);
router.post('/join', restaurant_controller.register);

//REST APIs
router.get('/api/restaurants', restaurant_controller.restaurants_list);
router.post('/api/restaurants', restaurant_controller.add_restaurant);

module.exports = router;

