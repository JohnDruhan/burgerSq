<<<<<<< HEAD
// Our Burger controller
// Sequelize manage data manipulation for all apropos http requests.
=======
// Burger controller
// =====================
// Sequelize to manage data manipulation
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be

var express = require("express");

var router = express.Router();
var db = require("../models");
<<<<<<< HEAD
=======

// get route 
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// get route, sequelize
router.get("/burgers", function(req, res) {
<<<<<<< HEAD
  
=======
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
  db.Burger.findAll({
    include: [db.Customer],
    order: [
      ["burger_name", "ASC"]
    ]
  })

<<<<<<< HEAD
    .then(function(dbBurger) {
=======
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
      var hbsObject = {
        burger: dbBurger
      };
      return res.render("index", hbsObject);
    });
});

// post route create burgers
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
<<<<<<< HEAD
  
=======
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
    .then(function(dbBurger) {
      console.log(dbBurger);
      res.redirect("/");
    });
});

// put route to devour burger
router.put("/burgers/update", function(req, res) {
<<<<<<< HEAD
  // create the customer and devoured burger
=======
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
  if (req.body.customer) {
    db.Customer.create({
      customer: req.body.customer,
      BurgerId: req.body.burger_id
    })
      .then(function(dbCustomer) {
        return db.Burger.update({
          devoured: true
        }, {
          where: {
            id: req.body.burger_id
          }
        });
      })
      .then(function(dbBurger) {
        res.json("/");
      });
  }
<<<<<<< HEAD
  // If no customer, update the burger to be devoured
=======
  // If no customer, update
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
  else {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    })
      .then(function(dbBurger) {
        res.json("/");
      });
  }
});

module.exports = router;
