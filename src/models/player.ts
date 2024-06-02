import { CategoryType, EquipmentType } from "../types";

class Player {
  constructor(
    public name: string,
    public category: CategoryType,
    public equipment?: EquipmentType,
    public health: number = 100,
    public attack: number = 100,
    public defense: number = 100,
    public energy: number = 100,
    public level: number = 0,
    public experience: number = 0
  ) {
    if (!equipment) {
      this.equipment = {
        type: this.category,
        weapon: "none",
      };
    }
  }
}

export default Player;
