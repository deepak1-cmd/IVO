// import { encodeEmail } f rom './common.js';


$(document).ready(function() {
    $("#submitBtn").click(function(event) {
      event.preventDefault(); // Prevent the default form submission

      var email = $('#inputEmail').val();

      // Prepare the data to be sent in the POST request
      var postData = {
        'email': email
      };

      // Send AJAX request to the API endpoint
      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/auth/send-otp/forgot/',
        data: postData, // Send email data as JSON
        dataType: 'json', // Specify JSON as the expected response type
        success: function(response) {
            window.location.href = 'http://127.0.0.1:8000/api/auth/forgot-otp/?email=' + encodeEmail(email);
        },
        error: function(xhr, status, error) {
          console.log('failed');

        }
      });

    });

  });