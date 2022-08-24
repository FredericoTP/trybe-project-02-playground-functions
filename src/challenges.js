// Desafio 1
function compareTrue(biscoito, bolacha) {
  let good = biscoito;
  let awesome = bolacha;

  if (good && awesome === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayStrings = phrase.split(' ');

  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  let last = array.pop();
  let first = array.shift();
  let concat = last + ', ' + first;

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highest = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highest) {
      highest = numbers[index];
    }
  }

  for (let index2 in numbers) {
    if (numbers[index2] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > mouse) {
    distance1 = cat1 - mouse;
  } else {
    distance1 = mouse - cat1;
  }
  
  if (cat2 > mouse) {
    distance2 = cat2 - mouse;
  } else {
    distance2 = mouse - cat2;
  }

  if (distance1 === distance2) {
    return "os gatos trombam e o rato foge";
  } else if (distance2 > distance1) {
    return "cat1";
  }

  return "cat2";
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzOrbuzz = [];

  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzOrbuzz.push("fizzBuzz");
    } else if (numbers[index] % 3 === 0) {
      fizzOrbuzz.push("fizz");
    } else if (numbers[index] % 5 === 0) {
      fizzOrbuzz.push("buzz");
    } else {
      fizzOrbuzz.push("bug!");
    }
  }

  return fizzOrbuzz;
}

// Desafio 9
function encode(phrase) {
  let arrayEncode = phrase.split('');
  
  let array = [];

  for (let index in phrase) {
    if (phrase[index] === "a") {
      array.push("1");
    } else if (phrase[index] === "e") {
      array.push("2");
    } else if (phrase[index] === "i") {
      array.push("3");
    } else if (phrase[index] === "o") {
      array.push("4");
    } else if (phrase[index] === "u") {
      array.push("5");
    } else {
      array.push(phrase[index]);
    }
  }

  let phraseEncode = array.join('');

  return phraseEncode;
}

function decode(phrase) {
  let arrayEncode = phrase.split('');
  
  let array = [];

  for (let index in phrase) {
    if (phrase[index] === "1") {
      array.push("a");
    } else if (phrase[index] === "2") {
      array.push("e");
    } else if (phrase[index] === "3") {
      array.push("i");
    } else if (phrase[index] === "4") {
      array.push("o");
    } else if (phrase[index] === "5") {
      array.push("u");
    } else {
      array.push(phrase[index]);
    }
  }

  let phraseEncode = array.join('');

  return phraseEncode;
}

// Desafio 10
function techList(technologies, person) {
  
  let tec = technologies.sort();
  
  let arrayTec = [];

  if (technologies.length === 0) {
    return "Vazio!";
  } else {
    for (let index in technologies) {
      arrayTec.push(arrayTec[index] = {"name": person, "tech": technologies[index]});
    }
  
    return arrayTec;
  }
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], "Lucas"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
