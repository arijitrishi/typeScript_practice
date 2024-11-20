import { Coach } from "./Coach";

export class FootballCoach implements Coach{
    getDailyWorkOut(): string {
        return "penalty practice must";
    }
}