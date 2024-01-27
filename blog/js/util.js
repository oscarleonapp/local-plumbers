
function validEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showSuccessMessage(title, content) {
    swal({
        title: title,
        text: content,
        // icon: "success",
        icon: `${mainURL}images/logo_principal.png`,
        button: false,
    });

    setTimeout(() => {
        swal.close();
    }, 2500);
}

function showWarningMessage(title, content) {
    swal({
        title: title,
        text: content,
        icon: `${mainURL}images/logo_principal.png`,
        button: "OK",
    });
}

function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $("html,body").animate(
        {
            scrollTop: $("#" + id).offset().top - 200,
        },
        "slow"
    );
}
