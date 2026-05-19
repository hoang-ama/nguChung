jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated", { 
        duration: 600,
        delay: 0,
        origin: "left",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    
    // CONTACT FORM SUBMIT TO GOOGLE APPS SCRIPT
    $("#contact-form").submit(function(e) {

        e.preventDefault();
        var $form = $(this);
        var $name = $("#contact-form-name");
        var $email = $("#contact-form-email");
        var $message = $("#contact-form-message");
        var $submitBtn = $form.find('button[type="submit"]');
        var submitButtonDefaultHtml = $submitBtn.data("default-label") || $submitBtn.html();
        var sendingText = $form.data("sending-text") || "Sending...";
        $submitBtn.data("default-label", submitButtonDefaultHtml);
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValid = true;

        function setSubmitting(isSubmitting) {
            if (isSubmitting) {
                $submitBtn.prop("disabled", true).text(sendingText);
                $form.addClass("submitting");
            } else {
                $submitBtn.prop("disabled", false).html(submitButtonDefaultHtml);
                $form.removeClass("submitting");
            }
        }

        function showSubmitError() {
            $form.removeClass("success").addClass("submit-error");

            setTimeout(function(){
                $form.removeClass("submit-error");
            }, 5000);
        }

        $form.removeClass("success submit-error");
        $("#contact-form input, #contact-form textarea").removeClass("error");

        if ($.trim($name.val()) === "") {
            $name.addClass("error");
            isValid = false;
        }

        if (!emailRegex.test($.trim($email.val()))) {
            $email.addClass("error");
            isValid = false;
        }

        if ($.trim($message.val()) === "") {
            $message.addClass("error");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        setSubmitting(true);

        $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: $form.serialize(),
            dataType: "json",
            timeout: 15000
        }).done(function(response) {
            if (response && response.result === "success") {
                $form.removeClass("submit-error").addClass("success");
                $("#contact-form textarea, #contact-form input").val("");

                setTimeout(function(){
                    $form.removeClass("success");
                }, 4000);
            } else {
                showSubmitError();
            }
        }).fail(function() {
            showSubmitError();
        }).always(function() {
            setSubmitting(false);
        });

    });

    
});