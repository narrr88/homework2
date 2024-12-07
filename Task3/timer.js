const EventEmmiter = require("node:events")

class Timer extends EventEmmiter{
    constructor(duration){
        super();
        this.duration = duration;
        this.remainingTime = duration;
    }

    start(){
        this.emit("start");

        while(this.remainingTime >= 0) {
            this.emit("tick", this.remainingTime);
            --this.remainingTime;
        }

        this.emit("end");
    }
}

module.exports = Timer;