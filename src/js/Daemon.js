import Caracter from './Character';

export default class Daemon extends Caracter {
  constructor(name) {
    super(name, 'Daemon');

    this.attack = 10;
    this.defence = 40;
  }
}
