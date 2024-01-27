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
    $("#utm-campaign-cotizacion").val(utm_campaign);
    $("#utm-campaign-cita").val(utm_campaign);
    let utm_content = getParameterByName("utm_content");
    $("#utm-content-cotizacion").val(utm_content);
    $("#utm-content-cita").val(utm_content);
    let utm_medium = getParameterByName("utm_medium");
    $("#utm-medium-cotizacion").val(utm_medium);
    $("#utm-medium-cita").val(utm_medium);
    let utm_source = getParameterByName("utm_source");
    $("#utm-source-cotizacion").val(utm_source);
    $("#utm-source-cita").val(utm_source);
    let utm_term = getParameterByName("utm_term");
    $("#utm-term-cotizacion").val(utm_term);
    $("#utm-term-cita").val(utm_term);

    // utm codes

    $("#btn-cotizaciones").click(function () {
        // Check for empty fields
        let firstName = $("#fake-firstname-cotizacion").val();

        if (firstName == "") {
            showWarningMessage("Nombre", "Por favor ingresa tu nombre.");
            goToByScroll("fake-firstname-cotizacion");
            return false;
        }

        $("#nombre-cotizacion").val(firstName);

        let lastName = $("#fake-lastname-cotizacion").val();

        if (lastName == "") {
            showWarningMessage("Apellido", "Por favor ingresa tu apellido.");
            goToByScroll("fake-lastname-cotizacion");
            return false;
        }

        $("#apellido-cotizacion").val(lastName);

        let phone = $("#fake-phone-cotizacion").val();
        if (phone == "") {
            showWarningMessage("Teléfono", "Por favor ingresa tu teléfono.");
            goToByScroll("fake-phone-cotizacion");
            return false;
        }

        $("#telefono-cotizacion").val(phone);

        let email = $("#fake-email-cotizacion").val();

        if (email == "") {
            showWarningMessage("Email", "Por favor ingresa tu email.");
            goToByScroll("fake-email-cotizacion");
            return false;
        } else {
            if (!validEmail(email)) {
                showWarningMessage(
                    "Email",
                    "Por favor ingresa un email valido."
                );
                goToByScroll("fake-email-cotizacion");
                return false;
            }
        }

        $("#email-cotizacion").val(email);

        let message = $("#fake-message-cotizacion").val();
        if (message == "") {
            showWarningMessage("Mensaje", "Por favor ingresa tu mensaje.");
            goToByScroll("fake-message-cotizacion");
            return false;
        }

        $("#mensaje-cotizacion").val(message);

        $("#btn-cotizaciones").prop("disabled", true);
        $("#cotizaciones-form").submit();
    });

    $("#btn-citas").click(function () {
        // Check for empty fields
        let firstName = $("#fake-firstname-cita").val();

        if (firstName == "") {
            showWarningMessage("Nombre", "Por favor ingresa tu nombre.");
            goToByScroll("fake-firstname-cita");
            return false;
        }

        $("#nombre-cita").val(firstName);

        let lastName = $("#fake-lastname-cita").val();

        if (lastName == "") {
            showWarningMessage("Apellido", "Por favor ingresa tu apellido.");
            goToByScroll("fake-lastname-cita");
            return false;
        }

        $("#apellido-cita").val(lastName);

        let phone = $("#fake-phone-cita").val();
        if (phone == "") {
            showWarningMessage("Teléfono", "Por favor ingresa tu teléfono.");
            goToByScroll("fake-phone-cita");
            return false;
        }

        $("#telefono-cita").val(phone);

        let email = $("#fake-email-cita").val();

        if (email == "") {
            showWarningMessage("Email", "Por favor ingresa tu email.");
            goToByScroll("fake-email-cita");
            return false;
        } else {
            if (!validEmail(email)) {
                showWarningMessage(
                    "Email",
                    "Por favor ingresa un email valido."
                );
                goToByScroll("fake-email-cita");
                return false;
            }
        }

        $("#email-cita").val(email);

        let message = $("#fake-message-cita").val();
        if (message == "") {
            showWarningMessage("Mensaje", "Por favor ingresa tu mensaje.");
            goToByScroll("fake-message-cita");
            return false;
        }

        $("#mensaje-cita").val(message);

        $("#btn-citas").prop("disabled", true);
        $("#citas-form").submit();
    });
});
