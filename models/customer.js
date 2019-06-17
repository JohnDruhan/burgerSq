// Customer model

<<<<<<< HEAD

=======
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Customer;
};
