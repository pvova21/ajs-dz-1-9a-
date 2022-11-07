import Character from './Character';

export default class Damage extends Character {
  constructor(name) {
    super(name);
    this.stonedValue = false;
    this.attackRange = undefined;
  }

  set attackChange(range) {
    this.attackRange = range;
  }

  get attackChange() {
    const damage = 100 - (this.attackRange - 1) * 10;
    let changeAttack = (this.attack * damage) / 100;
    if (this.stonedValue) {
      changeAttack -= Math.log2(this.attackRange) * 5;
    }
    return Math.round(changeAttack);
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get stoned() {
    return this.stonedValue;
  }
}
