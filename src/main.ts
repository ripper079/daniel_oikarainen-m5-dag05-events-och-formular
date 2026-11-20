// Dag 5: Events. hamta("#id") (från dom.ts) ger elementet eller kastar ett fel, så du slipper null-kontroller.
// Dag 5: Events. Menyn filtreras när man klickar, och bokningsformuläret valideras (kontakt.js).
import { meny } from "./data";
import { visaMeny, uppdateraRubrik, markeraDagensRatt, visaOrder } from "./ui";
import { billigast } from "./meny";
import { filtreraMeny } from "./filter";
import { kopplaFilter, kopplaLaggTill } from "./events";
import { laggTillIOrder, rensaOrder } from "./order";
import { hamta } from "./dom";
import type { Filter, OrderRad } from "./typer";

const lista = hamta("#meny-lista");
const rubrik = hamta("#meny-rubrik");
const filterGrupp = hamta("#filter");

// DEL 1: din första händelse -------------------------------------------
// 1. Hämta knappen .knapp i #hero. Lägg till en lyssnare för "click" som skriver ut
//    handelse.type och handelse.target i Console.
const buttonMeny = document.querySelector(".knapp");
buttonMeny!.addEventListener("click", (e) => {
  // 2. Lägg till handelse.preventDefault() i lyssnaren. Vad händer med länken?
  //    Ta bort preventDefault igen när du provat.
  // TODO
  console.log(`Typ av event: ${e.type}`);
  console.log(`Elementet som generade eventet ${e.target}`);
  //e.preventDefault();
  console.log("Btn kicked")
});




// DEL 2: filtret ----------------------------------------------------------
// 3. Skriv funktionen uppdateraMeny(filter: Filter): void: hämta rätter med filtreraMeny, visa dem med visaMeny,
//    uppdatera rubriken och markera den billigaste lunchen som dagens rätt (om det finns någon lunch).
// 4. Anropa uppdateraMeny("alla") direkt, och koppla filterknapparna med kopplaFilter.
// TODO


// DEL 3 (fördjupning): beställningen ---------------------------------------
// 5. let order: OrderRad[] = []; Koppla kopplaLaggTill(lista, ...) så att klick lägger till i order och visar den
//    med visaOrder. Koppla knappen #rensa-order till rensaOrder.
const orderRef = {
  lista: hamta("#order-lista"),
  summa: hamta("#order-summa"),
  tom: hamta("#order-tom"),
};
// TODO
