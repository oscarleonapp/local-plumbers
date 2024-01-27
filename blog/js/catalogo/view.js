$(document).ready(function () {
    var myIndex = $(".w-slider-dot.w-active").index();
    var counter = document.getElementById("activeCounterGallery");

    $(".w-slide").attrchange({
        trackValues: true,
        callback: function (event) {
            myIndex = $(".w-slider-dot.w-active").index();
            counter.innerHTML = myIndex + 1;
        },
    });
});

const app = Vue.createApp({
    data() {
        return {
            monto: priceVehicle || 0,
            enganche: 0,
            interes: 12,
            cuotas: 0,
            cuota: 0,
            interesCuota: 0,
            saldoCapital: 0,
            meses: 12,
            subMonto: 0,
            totalGlobal: 0,
            cuotasArray: [],
        };
    },
    methods: {
        interesToPercent() {
            return this.interes / 1200;
        },
        formatNumber(number) {
            return new Intl.NumberFormat("es-GT", {
                style: "currency",
                currency: "GTQ",
            }).format(number);
        },
        calcularCuotas() {
            this.cuotasArray = [];
            this.subMonto = Number(this.monto) - Number(this.enganche);
            this.cuotas = (
                (this.interesToPercent() *
                    -this.subMonto *
                    Math.pow(1 + this.interesToPercent(), Number(this.meses))) /
                (1 - Math.pow(1 + this.interesToPercent(), Number(this.meses)))
            ).toFixed(2);

            this.totalGlobal = this.subMonto;

            for (let i = 1; i <= this.meses; i++) {
                this.interesCuota = (
                    this.subMonto * this.interesToPercent()
                ).toFixed(2);
                this.saldoCapital = (this.cuotas - this.interesCuota).toFixed(
                    2
                );
                this.subMonto = (this.subMonto - this.saldoCapital).toFixed(2);

                this.cuotasArray.push({
                    numero: i,
                    cuota: this.formatNumber(this.cuotas),
                    interes: this.formatNumber(this.interesCuota),
                    saldoCapital: this.formatNumber(this.totalGlobal),
                });

                this.totalGlobal = (
                    this.totalGlobal - this.saldoCapital
                ).toFixed(2);
            }
        },
    },
    computed: {
        showInterestFormated() {
            return `${this.interes}%`;
        },
    },
    mounted() {
        this.calcularCuotas();
    },
});
app.mount("#calculadora");
