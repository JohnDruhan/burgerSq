$(document).ready(function() {

  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burgerInfo = {
      burger_id: $(this).children(".burger_id").val(),
      customer: $(this).children(".custom-input").val()
    };

    $.ajax({
      method: "PUT",
      url: "/burgers/update",
      data: burgerInfo
    }).then(function(data) {
<<<<<<< HEAD
=======
      // reload page to display devoured burger
>>>>>>> ae45111aef4006f3101ee474873bb50bdf2bf7be
      location.reload();
    });

  });
});
