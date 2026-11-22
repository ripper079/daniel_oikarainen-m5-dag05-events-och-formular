// Dag 5: Validering av bokningsformuläret. Rena funktioner, lätta att testa.
// Varje valideraX-funktion tar ett värde (text) och returnerar ett felmeddelande som text,
// eller en tom text "" om värdet är giltigt. Meddelandena står i tests.js.

// Namn: obligatoriskt, minst 2 tecken efter trim().
export function valideraNamn(text: string): string {
  // TODO
  if (text.trim().length === 0) return "Fyll i ditt namn.";
  else if (text.length < 2 ) return "Namnet måste vara minst 2 tecken.";
  else return "";

}

// E-post: obligatorisk, måste innehålla @, och ha formen text@text.text.
export function valideraEpost(text: string): string {
  // TODO
  //Chatgpt
  const epostRegex = /^[a-zA-ZåäöÅÄÖ]+@[a-zA-ZåäöÅÄÖ]+\.[a-zA-Z]{2,3}$/;
  
  if (text.length <= 0) 
    return "Fyll i din e-postadress.";
  else if (! text.includes("@"))
    return "E-postadressen måste innehålla @.";
  //Denna regex tar hela strängen i form av xxxxx@yyyyyy.aa eller xxxxx@yyyyyy.aaa
  else if (epostRegex.test(text)) 
    return "";
  else
    return "Ange en giltig e-postadress, till exempel namn@exempel.se.";
}

// Telefon: VALFRI (tom text är giltigt). Annars bara siffror, mellanslag, + och -, och minst 7 siffror.
export function valideraTelefon(text: string): string {
  // TODO
  if (text.length === 0) return "";


  //Chatgpt - blir regex igen
  //Denna tillåter bara bokstäver och med minst ett tecken

  const isAlphabeticalRegex = /^[a-zA-Z]+$/;  

  if (isAlphabeticalRegex.test(text)) return "Telefonnumret får bara innehålla siffror, mellanslag, plus och bindestreck.";
  
  const isPhoneRegex = /^\+?[0-9]{7,15}$/  
  //Jag kommer ta bort mellanslag och bindstrek för att använda ovanstående regex uttryck
  const phoneNumber =  text.replaceAll("-", "").replaceAll(" ", "");
  if (isPhoneRegex.test(phoneNumber)) return "";
  //Jag sätter att minsta längd på telefonnummer måste vara 7
  if (phoneNumber.length < 7 ) return "Telefonnumret är för kort.";

  return "Telefonnumer godkänd";
}

// Datum: obligatoriskt. text och idag är datum som "2026-10-19". Inte före idag.
export function valideraDatum(text: string, idag: string): string {
  // TODO
  if (text.length === 0 || idag.length === 0) return "Välj ett datum.";

  const foreDatum: Date = new Date(text);
  const efterDatum: Date = new Date(idag);
  if (isNaN(foreDatum.getDate()))
    return "Felaktig format på datum - Parameter 1";
  if (isNaN(efterDatum.getDate()))
    return "Felaktig format på datum - Parameter 2";    

  if (efterDatum > foreDatum) return "Datumet kan inte vara i det förflutna.";
  else if (efterDatum < foreDatum) return "";
  //Detta betyder att datumen är lika
  else return "";
}

// Antal personer: obligatoriskt (en tom text betyder att inget valts).
export function valideraAntal(text: string): string {
  // TODO
  //true om detta är ett nummer
  if (text.length === 0) return "Välj antal personer.";
  else return "";
}

// Dagens datum som "2026-10-19" (färdig, du behöver inte ändra den).
export function dagensDatum(): string {
  return new Date().toLocaleDateString("sv-SE");
}

// Validera ett helt formulär. varden = { namn, epost, telefon, datum, antal } (texter).
// Returnera ett objekt med BARA de fält som har fel: { namn: "Fyll i ditt namn." }
// Giltigt formulär ger ett tomt objekt {}.
export function valideraFormular(varden: Record<string, string>, idag: string): Record<string, string> {
  // TODO
  const objContainError: Record<string, string> = {};

  //Validate name
  const validateName = valideraNamn(varden["namn"]);
  if (validateName != "")
    objContainError["namn"] = validateName;

  //Validate email
  const validateEmail = valideraEpost(varden["epost"])
  if (validateEmail != "")
    objContainError["epost"] = validateEmail;

  //Validate phone
  const validatePhone = valideraTelefon(varden["telefon"]);
  if (validatePhone != "")
    objContainError["telefon"] = validatePhone;

  const validateDate = valideraDatum(varden["datum"], idag);
  if (validateDate != "")
    objContainError["datum"] = validateDate;

  const validateCount = valideraAntal(varden["antal"]);
  if (validateCount != "")
      objContainError["antal"] = validateCount;

  return objContainError;
}
