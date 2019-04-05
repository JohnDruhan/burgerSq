// Burger controller
// =====================
// Sequelize to manage data manipulation

var express = require("express");

var router = express.Router();
var db = require("../models");

// get route 
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// get route, sequelize
router.get("/burgers", function(req, res) {
  db.Burger.findAll({
    include: [db.Customer],
    order: [
      ["burger_name", "ASC"]
    ]
  })

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
    .then(function(dbBurger) {
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour burger
router.put("/burgers/update", function(req, res) {
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
  // If no customer, update
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
