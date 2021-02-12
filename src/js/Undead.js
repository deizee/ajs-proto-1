import Caracter from './Character';

export default class Undead extends Caracter {
  constructor(name) {
    super(name, 'Undead');

    this.attack = 25;
    this.defence = 25;
  }
}
