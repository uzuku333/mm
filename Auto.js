export class Auto {
  constructor(znacka, model, rok, cena, palivo = "", najezd = null) {
    this.znacka = znacka;
    this.model = model;
    this.rok = rok;
    this.cena = cena;
    this.palivo = palivo;
    this.najezd = najezd;
  }

  popis() {
    return `${this.znacka} ${this.model} (${this.rok}) za ${this.cenaText()}`;
  }

  cenaText() {
    return `${this.cena.toLocaleString("cs-CZ")} Kč`;
  }
}
