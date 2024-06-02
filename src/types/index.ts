export type CategoryType = "Assassin" | "Warrior" | "Archer" | "Mage";

type AssassinType = {
  type: "Assassin";
  weapon: AssassinWeaponType;
};

type WarriorType = {
  type: "Warrior";
  weapon: WarriorWeaponType;
};

type ArcherType = {
  type: "Archer";
  weapon: ArcherWeaponType;
};

type MageType = {
  type: "Mage";
  weapon: MageWeaponType;
};

export type EquipmentType = AssassinType | WarriorType | ArcherType | MageType;

export type AssassinWeaponType = "none" | "dagger";
export type WarriorWeaponType = "none" | "doubleSword";
export type ArcherWeaponType = "none" | "bow";
export type MageWeaponType = "none" | "staff";
