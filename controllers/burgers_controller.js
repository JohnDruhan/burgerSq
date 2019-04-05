// Our Burger controller
// Sequelize manage data manipulation for all apropos http requests.

var express = require("express");

var router = express.Router();
var db = require("../models");
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  
  db.Burger.findAll({
    include: [db.Customer],
    order: [
      ["burger_name", "ASC"]
    ]
  })

    .then(function(dbBurger) {
      var hbsObject = {
        burger: dbBurger
      };
      return res.render("index", hbsObject);
    });
});

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  
    .then(function(dbBurger) {
      console.log(dbBurger);
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update", function(req, res) {
  // create the customer and devoured burger
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
  // If no customer, update the burger to be devoured
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
