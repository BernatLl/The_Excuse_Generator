const who = ["The dog", "A raccoon", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "abduct", "crushed", "broke"];
const what = ["my homework", "my laptop", "my brain", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
//Unión de los Arrays.
const dataset = [who, action, what, when];
//Función para numero de item aleatorio del array.
const RandomNumber = arr => Math.floor(Math.random() * arr.length);
//Función para sacar el valor del item
const GetItem = (arr, i) => arr[i];
//Sacar el string del array.
const GetString = v => `${GetItem(v, RandomNumber(v))} `;
//Función para generar la excusa aleatoria.
const excuseGenerator = dset =>
  dset.reduce((acc = "", item) => (acc += GetString(item)));
//Selección del tag de HTML para aplicar la función.
const paragraf = document.querySelector("#excuse");
window.onload = function() {
  //Muestra de la excusa aletoria cada vez que se actualiza la página.
  paragraf.innerHTML = excuseGenerator(dataset);
};
