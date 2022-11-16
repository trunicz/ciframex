// document.querySelector('#header').innerHTML = message

const alfab = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const getC = (m, k) => {
  let c = "";

  if (m.length > k.length) {
    let i = 0;
    while (m.length > k.length) {
      if (i < k.length) {
        k += k[i];
        i++;
      } else {
        i = 0;
      }
    }
  } else {
    let i = 0;
    while (k.length > m.length) {
      if (i < m.length) {
        m += m[i];
        i++;
      } else {
        i = 0;
      }
    }
  }

  for (letter in k) {
    num1 = m[letter];
    num2 = k[letter];

    nums = alfab.indexOf(num1) - alfab.indexOf(num2);
    nums = nums % alfab.length;

    while (nums < 0) {
      nums = alfab.length + nums;
    }
    c += alfab[nums];
  }

  console.log(c);
};

getC("uskkh", "s");
