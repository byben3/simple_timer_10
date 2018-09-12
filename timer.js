var Timer = {

    minu: null,
    seconde: null,
    cibleT: "",
    interval: "",


    initTimer: function (minutes, secondes, cible) {

        this.stopTimer();
        this.seconde = secondes;
        this.minu = minutes;
        this.cibleT = cible;
        this.cibleT.innerHTML = ""
        this.runTimer();
    },

    coreTimer: function () {

        this.seconde = this.seconde - 1;

        if (this.seconde === -1) {
            this.minu = this.minu - 1;
            this.seconde = 59;
        }

        if (this.seconde < 10) {
            this.seconde = "0" + this.seconde;
        } else {
            this.seconde = "" + this.seconde;
        }
        
        var affichage = document.getElementById(this.cibleT);
        affichage.innerHTML = "TIMER : " + this.minu + " minutes " + this.seconde + " secondes</span>";

        if (this.minu < 0) {
            this.stopTimer();
                       
        }
    },

    runTimer: function () {
        var interval = setInterval(this.coreTimer.bind(this), 1000);
        this.interval = interval;
    },

    stopTimer: function () {

        clearInterval(this.interval);
    }
};

Timer.initTimer(10,0,"affichageTimer");
