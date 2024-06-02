"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("models/player"));
class Main {
    constructor() {
        console.log("teste");
        const player = new player_1.default("Arthur", "Warrior");
        console.log("player", player);
    }
}
new Main();
