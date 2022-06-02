// Name and lastName.
const name = "Yhonatan";
const lastName = "Peguero";

//Conact information.
const estudiante = `${name} ${lastName}`;
console.log(estudiante);

//String in toUpperCase.
const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//String in toLowerCase.
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Nums words in string.
const numWords = estudiante.length;
console.log(estudiante.length);

//First word of name
const firstWord = estudiante.substring(0, 1);
console.log(estudiante.substring(0, 1));

//Last word of lastName
const lastWord = lastName.substring(6, 7);
console.log(lastName.substring(6, 7));

//Variable without spaces.
const deleteSpaces = estudiante.trim();
console.log(estudiante.trim());

//Boolean variable that tells if the Name is contained in the variable "student".
const nameInString = estudiante.includes(name);
console.log(estudiante.includes(name));
