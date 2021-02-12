export default class Character {
  constructor(name, type) {
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя персонажа не удовлетворяет заданным условиям (от 2 до 10 символов)');
    }

    if (
      this.type !== 'Bowman'
      || this.type !== 'Swordsman'
      || this.type !== 'Magician'
      || this.type !== 'Daemon'
      || this.type !== 'Undead'
      || this.type !== 'Zombie'
    ) {
      throw new Error('Тип персонажа не удовлетворяет заданным условиям (Bowman, Swordsman, Magician, Daemon, Undead или Zombie)');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
