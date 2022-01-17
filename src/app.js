window.onload = function() {
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
  const excuse = [who, action, what, when];
  const RandomIndex = arr => Math.floor(Math.random() * arr.length);
  const RandomItem = (arr, i) => arr[i];
  const GenerateString = arr => RandomItem(arr, RandomIndex(arr));
  const generateExcuse = arr => {
    let str = "";
    for (const val of arr) {
      str += GenerateString(val) + " ";
    }
    return str;
  };
  console.log(generateExcuse(excuse));
};
