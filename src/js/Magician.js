import Caracter from './Character';

export default class Magician extends Caracter {
  constructor(name) {
    super(name, 'Magician');

    this.attack = 10;
    this.defence = 40;
  }
}
