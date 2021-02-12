import Caracter from './Character';

export default class Swordsman extends Caracter {
  constructor(name) {
    super(name, 'Swordsman');

    this.attack = 40;
    this.defence = 10;
  }
}
