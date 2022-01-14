window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let select = array => {
    let selectarray = Math.floor(Math.random() * array.length);
    return array[selectarray];
  };

  console.log(
    `${select(who)} ${select(action)} ${select(what)} ${select(when)}`
  );
};
