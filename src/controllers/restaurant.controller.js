const Restaurant = require('../models/restaurant.model');

/* Web app routes */

// Fetch all restaurants
exports.all_restaurants =  async (req, res) => {
        const restaurants =  await Restaurant.find();
        res_data = {
            "return": true,
            "message": "",
            "data": restaurants
        }
        res.render('index', {res_data});
};

// Join page route to register new restaurant
exports.join = (req, res) => {
    res.render('join');
}

// Register new restaurant
exports.register = async (req, res) => {
    try{
        let {name, contact_name, pincode, location, website, phone, avg_daily_trans} = req.body;
        //Check if the user already exists :
        let isAlreadyExist = await Restaurant.findOne({name: req.body.name, phone: req.body.phone});
        if (isAlreadyExist){ 
            req.flash('error', 'Restaurant already exist');
            // return res.status(400).send('Restaurant already exist');
            res.redirect('/');
            return;
        }
            
        let restaurant = new Restaurant({
            name, 
            contact_name, 
            pincode, 
            location, 
            website, 
            phone, 
            avg_daily_trans
        });


        restaurant.save((err, save_restaurant) => {
            if (err) {
                req.flash('error', err.name);
                res.redirect('/');
            }
            res_data = {
                "return": true,
                "message": "Restaurant added successfully",
                "data": save_restaurant
            }
            req.flash('success', 'Joined successfully.');
            res.redirect('/');

        });

    } catch (e) {
        req.flash('error', 'Errorss');
        res.redirect('/');
    }
}


/* REST APIs */

//Fetch all restaurants list
exports.restaurants_list =  (req, res) => {
    try{
        const restaurants = Restaurant.find().then(
        restaurants => {
            res_data = {
                "return": true,
                "message": "Restaurants list loaded successfully",
                "data": restaurants
            }
            return res.status(200).send(res_data);

        }).catch(err => {
        throw new Error("Unable to find restaurants");
    })
    } catch (e) {
        res.status(400).send("Unable to load restaurants list : "+e);

    }
}

// Register new restaurant
exports.add_restaurant = async (req, res) => {
    try{
        let {name, contact_name, pincode, location, website, phone, avg_daily_trans} = req.body;
        //Check if the user already exists :
        let isAlreadyExist = await Restaurant.findOne({name: req.body.name, phone: req.body.phone});
        if (isAlreadyExist) return res.status(400).send({
            "return": false,
            "error": "Restaurant already added."
        });

        let restaurant = new Restaurant({
            name, 
            contact_name, 
            pincode, 
            location, 
            website, 
            phone, 
            avg_daily_trans
        });


        restaurant.save((err, save_restaurant) => {
            if (err) {
                return res.status(400).send({
                    "return": false,
                    "error":err.message
                });
            }
            res_data = {
                "return": true,
                "message": "Restaurant added successfully",
                "data": save_restaurant
            }
            res.status(201).send(res_data);
            
        });

    } catch (e) {
        return res.status(400).send({
            "return": false,
            "error": e
        });
    }

}