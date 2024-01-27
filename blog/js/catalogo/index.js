$(document).ready(function () {
    // Disable submit when is current page
    $("#formFiltrosDesktop").submit(function (e) {
        e.preventDefault();
    });

    $("#formFiltrosMovil").submit(function (e) {
        e.preventDefault();
    });

    // hide elements when page is loaded because is necessary to show range filters
    $(".seis-filtros-desktop").addClass("active");
    $(".overlay-filtros").addClass("active");
    $(".filtro-anio").hide();
    $(".filtro-precio").hide();
    $(".filtro-kilometraje").hide();

    $(".mid_filter_item_content_filter").on("click", function (e) {
        let inputSearchTypeParam = e.target
            .getAttribute("data-path")
            .replace(".", "");
        $("#inputSearchType").val(inputSearchTypeParam);

        if ($('#mid_filter_type_button').length) {
            $('#mid_filter_type_button').text(e.target.innerText)
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().find('.mid_filter_item_heading_title').removeClass('active');
        }


    });

    $(".mid_filter_item_content_filter_text").on("click", function (e) {
        let inputSearchBrandParam = e.target
            .getAttribute("data-path")
            .replace(".", "");
        $("#inputSearchBrand").val(inputSearchBrandParam);

        if ($('#mid_filter_brand_button').length) {
            $('#mid_filter_brand_button').text(e.target.innerText)
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().find('.mid_filter_item_heading_title').removeClass('active');
        }
    });

    $(".checkbox-filtro--transmission .checkbox-item-filtro").on(
        "click",
        function (e) {
            let inputSearchTransmissionParam = e.target
                .getAttribute("data-path")
                .replace(".", "");
            if ($(this).hasClass("jplist-selected")) {
                $("#inputSearchTransmission").val("");
                if ($('#mid_filter_transm_button')) {
                    $('#mid_filter_transm_button').text('Transmisión')
                }
            } else {
                $("#inputSearchTransmission").val(inputSearchTransmissionParam);
                if ($('#mid_filter_transm_button')) {
                    $('#mid_filter_transm_button').text($(this).next().text())
                }
            }
        }
    );

    $(".agencia-filtro--location").on("click", function (e) {
        let inputSearchLocationParam = e.target
            .getAttribute("data-path")
            .replace(".", "");
        $("#inputSearchLocation").val(inputSearchLocationParam);
    });

    $(".checkbox-filtro--order .checkbox-item-filtro").on(
        "click",
        function (e) {
            console.assert(e.target);
            let inputSearchOrderParam = e.target.getAttribute("data-id");
            if ($(this).hasClass("jplist-selected")) {
                $("#inputSearchOrder").val("");
            } else {
                $("#inputSearchOrder").val(inputSearchOrderParam);
            }
        }
    );

    $("#formFiltrosDesktopSubmit").submit(function () {
        $("#inputSearchMinYear").val($("#valueMinYear").text());
        $("#inputSearchMaxYear").val($("#valueMaxYear").text());

        $("#inputSearchMinPrice").val($("#valueMinPrice").text());
        $("#inputSearchMaxPrice").val($("#valueMaxPrice").text());

        $("#inputSearchMinMileage").val($("#valueMinMileage").text());
        $("#inputSearchMaxMileage").val($("#valueMaxMileage").text());
    });

    $(".agencia-filtro--fuel").on("click", function (e) {
        let inputSearchFuelParam = e.target
            .getAttribute("data-path")
            .replace(".", "");
        $("#inputSearchFuel").val(inputSearchFuelParam);
    });

    $("#filtrar").click(function () {
        $(".mid__filter.w-clearfix").toggle();
    });

    $(".mid_filter_item_heading_title").on("click", function () {
        // if ($(this).hasClass("active")) {
        //     $(this).removeClass("active");
        //     $(".mid_filter_item_content").hide();
        //     $(this).parent().next().fadeOut();
        // } else {
        //     $(".mid_filter_item_content").hide();
        //     $(this).addClass("active");
        //     $(this).parent().next().fadeIn();
        //     // hide all except this
        // }

        // $(".mid_filter_item_content").hide();
        // $(this).toggleClass("active");
        // $(this).parent().next().fadeToggle();

        // hide all except this

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".mid_filter_item_content").hide();
            $(this).parent().next().hide();
        } else {
            $(".mid_filter_item_content").hide();
            $(".mid_filter_item_heading_title").removeClass("active");
            $(this).addClass("active");

            $(this).parent().next().show();
            // hide all except this
        }
    });

    if ($(window).width() > 991) {
        $("#filtros").click(function () {
            $(".mid_filter_item_heading_title").removeClass("active");
            $(this).toggleClass("active");
            $(".mid_filter_item_content").hide();
            $(".seis-filtros-desktop").toggle();
        });
        $(".close-link, #view-results").click(function () {
            $("#filtros").removeClass("active");
            $(".seis-filtros-desktop").toggle();
        });
    } else {
        $("#filtros").click(function () {
            $(".overlay-filtros").toggle();
        });
        $(".close-link, #view-results").click(function () {
            $(".overlay-filtros").toggle();
        });

        $("#formFiltrosDesktopSubmit").submit(function (e) {
            e.preventDefault();
            $("#formFiltrosMovilSubmit").submit();
        });

        $("#inputSearchName").on("keydown", function (e) {
            $("#inputSearchNameMobile").val(e.target.value);
        });

        $(".tipo-car--type-mobile").on("click", function (e) {
            let inputSearchTypeParamMobile = e.target
                .getAttribute("data-path")
                .replace(".", "");
            $("#inputSearchTypeMobile").val(inputSearchTypeParamMobile);
        });

        $(".agencia-filtro--brand-mobile").on("click", function () {
            let inputSearchBrandParamMobile = $(this)
                .attr("data-path")
                .replace(".", "");
            $("#inputSearchBrandMobile").val(inputSearchBrandParamMobile);
        });

        $(".checkbox-filtro--transmission-mobile .checkbox-item-filtro").on(
            "click",
            function (e) {
                let inputSearchTransmissionParamMobile = e.target
                    .getAttribute("data-path")
                    .replace(".", "");
                if ($(this).hasClass("jplist-selected")) {
                    $("#inputSearchTransmissionMobile").val("");
                } else {
                    $("#inputSearchTransmissionMobile").val(
                        inputSearchTransmissionParamMobile
                    );
                }
            }
        );

        $(".agencia-filtro--location-mobile").on("click", function () {
            let inputSearchLocationParamMobile = $(this)
                .attr("data-path")
                .replace(".", "");
            $("#inputSearchLocationMobile").val(inputSearchLocationParamMobile);
        });

        $(".checkbox-filtro--order-mobile .checkbox-item-filtro").on(
            "click",
            function (e) {
                console.assert(e.target);
                let inputSearchOrderParamMobile =
                    e.target.getAttribute("data-id");
                if ($(this).hasClass("jplist-selected")) {
                    $("#inputSearchOrderMobile").val("");
                } else {
                    $("#inputSearchOrderMobile").val(
                        inputSearchOrderParamMobile
                    );
                }
            }
        );

        $("#formFiltrosMovilSubmit").submit(function () {
            $("#inputSearchMinYearMobile").val($("#valueMinYearMobile").text());
            $("#inputSearchMaxYearMobile").val($("#valueMaxYearMobile").text());

            $("#inputSearchMinPriceMobile").val(
                $("#valueMinPriceMobile").text()
            );
            $("#inputSearchMaxPriceMobile").val(
                $("#valueMaxPriceMobile").text()
            );

            $("#inputSearchMinMileageMobile").val(
                $("#valueMinMileageMobile").text()
            );
            $("#inputSearchMaxMileageMobile").val(
                $("#valueMaxMileageMobile").text()
            );
        });

        $(".agencia-filtro--fuel-mobile").on("click", function () {
            let inputSearchFuelParamMobile = $(this)
                .attr("data-path")
                .replace(".", "");
            $("#inputSearchFuelMobile").val(inputSearchFuelParamMobile);
        });
    }

    $("#ubicacion").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-ubicacion").fadeIn();
            });
    });

    $("#ordenar").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-ordenar").fadeIn();
            });
    });

    $("#anio").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-ordenar, .filtro-precio, .filtro-kilometraje, .filtro-combustible"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-anio").fadeIn();
            });
    });

    $("#precio").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-anio, .filtro-ordenar, .filtro-kilometraje, .filtro-combustible"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-precio").fadeIn();
            });
    });

    $("#kilometraje").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-anio, .filtro-precio, .filtro-ordenar, .filtro-combustible"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-kilometraje").fadeIn();
            });
    });

    $("#combustible").click(function () {
        $(".cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-anio, .filtro-precio, .filtro-ordenar, .filtro-kilometraje"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-combustible").fadeIn();
            });
    });

    $("#tipo-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-ubicacion, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-tipo").fadeIn();
            });
    });

    $("#marca-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-ubicacion, .filtro-tipo, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-marca").fadeIn();
            });
    });

    $("#transmision-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-ubicacion, .filtro-tipo, .filtro-marca"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-transmision").fadeIn();
            });
    });

    $("#ubicacion-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-ubicacion").fadeIn();
            });
    });

    $("#ordenar-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-ordenar").fadeIn();
            });
    });

    $("#anio-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-ordenar, .filtro-precio, .filtro-kilometraje, .filtro-combustible, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-anio").fadeIn();
            });
    });

    $("#precio-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-ordenar, .filtro-anio, .filtro-kilometraje, .filtro-combustible, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-precio").fadeIn();
            });
    });

    $("#kilo-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-combustible, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-kilometraje").fadeIn();
            });
    });

    $("#com-movil").click(function () {
        $(".seis-filtros-movil .cta-filtro").removeClass("active");
        $(this).addClass("active");
        $(
            ".filtro-ubicacion, .filtro-ordenar, .filtro-anio, .filtro-precio, .filtro-kilometraje, .filtro-tipo, .filtro-marca, .filtro-transmision"
        )
            .fadeOut()
            .promise()
            .done(function () {
                $(".filtro-combustible").fadeIn();
            });
    });
});
