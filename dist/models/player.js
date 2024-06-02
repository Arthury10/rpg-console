"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(name, category, equipment, health = 100, attack = 100, defense = 100, energy = 100, level = 0, experience = 0) {
        this.name = name;
        this.category = category;
        this.equipment = equipment;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.energy = energy;
        this.level = level;
        this.experience = experience;
        if (!equipment) {
            this.equipment = {
                type: this.category,
                weapon: "none",
            };
        }
    }
}
exports.default = Player;
