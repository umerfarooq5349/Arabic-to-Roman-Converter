let number = document.getElementById("number");

let result = document.getElementById("output");

function convert_btn() {
  let number_input = number.value;
  if (number_input === "") {
    result.innerText = "Please enter a valid number";
  } else {
    if (number_input <= 0) {
      result.innerText = "Please enter a number greater than or equal to 1";
    } else if (number_input >= 4000) {
      result.innerText = "Please enter a number less than or equal to 3999";
    } else {
      result.innerText = convertToRoman(number_input);
      console.log(convertToRoman(number_input));
    }
  }
}

function convertToRoman(num) {
  const rules = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let res = "";
  const romans = Object.keys(rules);
  for (let i = 0; i < romans.length; ++i) {
    const val = rules[romans[i]];
    while (num >= val) {
      num -= val;
      res += romans[i];
    }
  }
  return res;
}
