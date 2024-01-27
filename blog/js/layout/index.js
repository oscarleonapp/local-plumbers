$(document).ready(function () {
    // utm codes

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    let utm_campaign = getParameterByName("utm_campaign");
    $("#utm-campaign-newsletter").val(utm_campaign);
    let utm_content = getParameterByName("utm_content");
    $("#utm-content-newsletter").val(utm_content);
    let utm_medium = getParameterByName("utm_medium");
    $("#utm-medium-newsletter").val(utm_medium);
    let utm_source = getParameterByName("utm_source");
    $("#utm-source-newsletter").val(utm_source);
    let utm_term = getParameterByName("utm_term");
    $("#utm-term-newsletter").val(utm_term);

    // utm codes

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    $("#toggle_mobile_close").on("click", function () {
        $(".container_menu.var.w-clearfix").toggle();
    });

    $("#toggle__mobile").click(function () {
        $(".container_menu.var.w-clearfix").toggle();
    });

    $("#btn-newsletter").click(function () {
        let email = $("#fake-email-newsletter").val();
        let nombre = $("#fake-nombre-newsletter").val();

        if (email == "" || email == "") {
            showWarningMessage("Alerta", "Por favor ingresa tu nombre y correo electrónico para suscribirte.");
            goToByScroll("fake-email-newsletter");
            return false;
        } else {
            if (!validEmail(email)) {
                showWarningMessage(
                    "Email",
                    "Por favor ingresa un email valido."
                );
                goToByScroll("fake-email-newsletter");
                return false;
            }
        }

        $("#email-newsletter").val(email);
        $("#nombre-newsletter").val(nombre);

        $("#btn-newsletter").prop("disabled", true);
        $("#newsletter-form").submit();
    });
});