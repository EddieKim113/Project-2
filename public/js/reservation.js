$( ".submit" ).click(function( event ) {
    event.preventDefault();
    
    var newReservation = {
        name: $("#reserve-name").val().trim(),
        phone: $("#reserve-phone").val().trim(),
        type: $("#reserve-type").val(),
        email: $("#reserve-email").val().trim(),
        partySize: $("#reserve-number").val().trim(),
        date: $("#reserve-date").val().trim(),
        time: $("#reserve-time").val().trim(),
    };

    // Send the POST request.
    $.ajax("/reservation", {
        type: "POST",
        data: newReservation
      }).then(
        function() {
          console.log("created new reservation");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

