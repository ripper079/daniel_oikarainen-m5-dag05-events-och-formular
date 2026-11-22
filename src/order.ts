// Dag 5 (fördjupning): Beställningen som data. En order är en array: [{ id: 1, antal: 2 }, ...]
import type { OrderRad } from "./typer";
// Alla funktioner ska returnera NYA arrayer och aldrig ändra order de får in.

// Lägg till en rätt. Finns id redan i ordern: öka antal med 1. Annars lägg till { id, antal: 1 }.
export function laggTillIOrder(order: OrderRad[], id: number): OrderRad[] {
  // TODO
  //Shallow copy funkar ej
  //const copyOrder: OrderRad[] = order.map( element => ({...element}));
  const copyOrder: OrderRad[] = structuredClone(order);

  const foundOrder = copyOrder.find((element) => element.id === id);

  //Finns redan detta id på orderraden
  //Denna ändrar objektet direkt på kopian!!!
  if (foundOrder){
    foundOrder.antal += 1;
  }
  //skapa en helt NY orderrad
  else {
    const firstOrdern: OrderRad = {id: id, antal: 1};
    copyOrder.push(firstOrdern);
  }

  return copyOrder;
}

// En tom order.
export function rensaOrder(): OrderRad[] {
  // TODO
  let tomOrder: OrderRad[];
  tomOrder = [];
  return tomOrder;
}

// Totala antalet varor i ordern (summan av alla antal).
export function antalIOrder(order: OrderRad[]): number {
  // TODO
  if (order.length === 0) return 0;

  const countOrders: number = order.reduce((accumulator, currentElement) => accumulator += currentElement.antal, 0);

  return countOrders;
}
