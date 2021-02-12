import Caracter from './Character';

export default class Zombie extends Caracter {
  constructor(name) {
    super(name, 'Zombie');

    this.attack = 40;
    this.defence = 10;
  }
}
