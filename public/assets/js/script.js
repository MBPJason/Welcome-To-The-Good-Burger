$(function () {
  $(".devour-burger").on("click", function (event) {
    let id = $(this).data("id");
    let eaten = true;

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten,
    }).then(function () {
      console.log("changed eaten to true");
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
});
