/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const emailParams = {
      from_name: formData.get("name"),      // Sender's Name
      from_email: formData.get("email"),   // Sender's Email
      message: formData.get("message"),    // Message Content
  };

  console.log(emailParams);

  emailjs.send('service_d2tie8u', 'template_biemsns', emailParams)
      .then(() => {
          alert("Message sent successfully!");
      })
      .catch((error) => {
          console.error("Error sending message:", error);
          alert("Failed to send the message. Please try again later.");
      });
});


