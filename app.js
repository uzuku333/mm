import { Auto } from "./Auto.js";
import { Autobazar } from "./Autobazar.js";

const form = document.querySelector("#autoForm");
const seznam = document.querySelector("#seznamAut");
const chyba = document.querySelector("#chyba");
const souhrn = document.querySelector("#souhrn");

const autobazar = new Autobazar();

function vykresli() {
  seznam.innerHTML = "";

  autobazar.auta.forEach((auto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${auto.znacka} ${auto.model} (${auto.rok}) – ${auto.cenaText()}
      <button data-index="${index}">Smazat</button>
    `;
    seznam.appendChild(li);
  });

  souhrn.textContent = `Počet aut: ${autobazar.auta.length} | Průměrná cena: ${autobazar.prumernaCena().toLocaleString("cs-CZ")} Kč`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  chyba.textContent = "";

  const znacka = form.znacka.value.trim();
  const model = form.model.value.trim();
  const rok = Number(form.rok.value);
  const cena = Number(form.cena.value);

  const aktualniRok = new Date().getFullYear();

  if (!znacka || !model) {
    chyba.textContent = "Značka a model nesmí být prázdné.";
    return;
  }

  if (isNaN(rok) || rok < 1980 || rok > aktualniRok) {
    chyba.textContent = "Rok výroby není platný.";
    return;
  }

  if (isNaN(cena) || cena <= 0) {
    chyba.textContent = "Cena musí být kladné číslo.";
    return;
  }

  const auto = new Auto(znacka, model, rok, cena);
  autobazar.pridatAuto(auto);

  form.reset();
  vykresli();
});

seznam.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.dataset.index;
    autobazar.smazatAuto(index);
    vykresli();
  }
});
