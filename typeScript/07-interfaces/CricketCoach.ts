import { Coach } from "./Coach";
export class CricketCoach implements Coach{
    getDailyWorkOut(): string {
        return "Practice in all format";
    }
}