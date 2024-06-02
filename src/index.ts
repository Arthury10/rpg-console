import Player from "./models/player";
import promptSync from "prompt-sync";
import { CategoryType } from "./types";

const prompt = promptSync();

class Main {
  constructor() {
    const players: Player[] = [];

    while (true) {
      console.log("-".repeat(50));
      console.log("0 - Sair");
      console.log("1 - Listar Todos Player");
      console.log("2 - Criar Player");
      console.log("-".repeat(50));

      const option = Number(prompt("Digite a opção desejada: "));

      Array.from({ length: 10 }).map((_, i) => {
        const randomValue = Math.random();

        let category: CategoryType = "Warrior";

        if (randomValue <= 0.35) {
          category = "Archer";
        } else if (randomValue >= 0.36 && randomValue <= 0.5) {
          category = "Mage";
        } else if (randomValue >= 0.51 && randomValue <= 0.69) {
          category = "Assassin";
        }

        const playerCreated = new Player(`Player-${i}`, category);

        players.push(playerCreated);
      });

      switch (option) {
        case 1:
          console.log("Player: ", players);
          break;
        case 2:
          console.log("Create User: ");
          const name = prompt("Name: ");
          console.log('Categories: "Assassin" | "Warrior" | "Archer" | "Mage"');
          const category = prompt("Category: ") as CategoryType;

          const playerCreated = new Player(name, category);

          players.push(playerCreated);

          console.log("PlayerCreated", playerCreated);
          break;
      }

      if (option === 0) {
        break;
      }
    }
  }
}

new Main();
