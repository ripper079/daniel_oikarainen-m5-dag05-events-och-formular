// Dag 5: Funktioner som kopplar händelser (events). Gör testerna gröna på tests.html.
import type { Filter } from "./typer";
// Båda använder EVENT DELEGATION: EN lyssnare på parent, inte en per knapp.

// 1. grupp är elementet som innehåller filterknapparna: <button data-filter="bakverk" aria-pressed="false">
//    Vid klick på en knapp (eller något inuti den):
//      - sätt aria-pressed="true" på knappen som klickades och "false" på alla andra knappar i gruppen
//      - anropa vidVal(knappens data-filter)
//    Klick på något annat i gruppen ska inte göra något.
//    Tips: handelse.target.closest('button[data-filter]')
export function kopplaFilter(grupp: HTMLElement, vidVal: (filter: Filter) => void): void {
  // TODO  
  //Kod utanför eventlistener körs enbart en gång varje gång kopplaFilter anropas
  //console.log("kopplaFilter anropad...");

  //Observera Koden körs varje gång det klickas i containern för ALLA knappar
  grupp.addEventListener("click", (eventObject) => {    
    if (!(eventObject.target instanceof HTMLElement)) return ; 
    //Identifiera knapp
    //const knapp = (eventObject.target as Element).closest<HTMLButtonElement>('button[data-filter]');
    const knapp = eventObject.target.closest<HTMLButtonElement>("button[data-filter]");
    
    //Klickat på ngt annat, gör inget
    if (!knapp) return ;

    let allChildButtons = grupp.querySelectorAll<HTMLButtonElement>('button');
    for (const oneButton of allChildButtons)
      oneButton.setAttribute("aria-pressed", "false");
    
    knapp.setAttribute("aria-pressed", "true");
    //Skickar med en av alla/vegetarisk/bakverk/dryck/lunch.
    //Detta är satt i html dokumentet. Specifiera at det du skickar är ett Filter!
    vidVal(knapp.dataset.filter as Filter);
  });  
}

// 2. container innehåller kort med knappar: <button class="lagg-i-order" data-id="3">
//    Vid klick på en sådan knapp: anropa vidLaggTill(id) där id är ett TAL (dataset ger text!).
//    Klick på något annat ska inte göra något.
export function kopplaLaggTill(container: HTMLElement, vidLaggTill: (id: number) => void): void {
  // TODO
  console.log("KopplaLäggtill anropad");

  container.addEventListener("click", (eventObject) => {
    const knapp = (eventObject.target as Element).closest<HTMLButtonElement>("button.lagg-i-order");
    if (!knapp) return;

    vidLaggTill(Number(knapp.dataset.id));
  });
}
