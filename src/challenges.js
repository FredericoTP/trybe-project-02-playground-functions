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
  let concat = `${last}, ${first}`;

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
  let highest = Math.max(...numbers);

  for (let index2 in numbers) {
    if (numbers[index2] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);

  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  } if (distance2 > distance1) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzOrbuzz = [];

  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzOrbuzz.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      fizzOrbuzz.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      fizzOrbuzz.push('buzz');
    } else {
      fizzOrbuzz.push('bug!');
    }
  }

  return fizzOrbuzz;
}

// Desafio 9
function encode(phrase) {
  let array = [];

  for (let index in phrase) {
    if (phrase[index] === 'a') {
      array.push('1');
    } else if (phrase[index] === 'e') {
      array.push('2');
    } else if (phrase[index] === 'i') {
      array.push('3');
    } else if (phrase[index] === 'o') {
      array.push('4');
    } else if (phrase[index] === 'u') {
      array.push('5');
    } else {
      array.push(phrase[index]);
    }
  }

  let phraseEncode = array.join('');

  return phraseEncode;
}

function decode(phrase) {
  let array = [];

  for (let index in phrase) {
    if (phrase[index] === '1') {
      array.push('a');
    } else if (phrase[index] === '2') {
      array.push('e');
    } else if (phrase[index] === '3') {
      array.push('i');
    } else if (phrase[index] === '4') {
      array.push('o');
    } else if (phrase[index] === '5') {
      array.push('u');
    } else {
      array.push(phrase[index]);
    }
  }

  let phraseEncode = array.join('');

  return phraseEncode;
}

// Desafio 10
function techList(technologies, person) {
  technologies.sort();
  let arrayTech = [];

  if (technologies.length === 0) {
    return 'Vazio!';
  }

  for (let index in technologies) {
    let object = { tech: technologies[index], name: person };
    arrayTech.push(object);
  }
  return arrayTech;
}

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
