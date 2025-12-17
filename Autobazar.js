
export class Autobazar {
  constructor() {
    this.auta = [];
  }

  pridatAuto(auto) {
    this.auta.push(auto);
  }

  smazatAuto(index) {
    this.auta.splice(index, 1);
  }

  prumernaCena() {
    if (this.auta.length === 0) return 0;
    const soucet = this.auta.reduce((sum, auto) => sum + auto.cena, 0);
    return Math.round(soucet / this.auta.length);
  }
}
