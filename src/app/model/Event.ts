export class Event {
    img : string;
    calendar : string
    clock : string;
    market : string;
    h3 : string;
    p : string;


    constructor ( img: string, calendar: string, clock: string, market: string, h3: string, p: string) {
        this.img = img;
        this.calendar = calendar;
        this.clock = clock;
        this.market = market;
        this.h3 = h3;
        this.p = p;
    }

}