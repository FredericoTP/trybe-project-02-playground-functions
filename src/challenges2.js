// Desafio 11
function generatePhoneNumber(numbers) {
  let numbers1 = [];
  let numbers2 = [];
  let numbers3 = [];

  for (let index in numbers) {
    if (index <= 1) {
      numbers1.push(numbers[index]);
    } else if (index <= 6) {
      numbers2.push(numbers[index]);
    } else {
      numbers3.push(numbers[index]);
    }
  }

  let phone = `(${numbers1}) ${numbers2}-${numbers3}`;
  let phone2 = phone.replaceAll(',', '');

  let num = 0;
  let count = 0;
  let count2 = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    num = numbers[index];
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index2] === num) {
        count2 += 1;
      }
    }
    if (count2 > count) {
      count = count2;
    }
    count2 = 0;
  }
  if (numbers.length < 11 || numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index3 in numbers) {
    if (numbers[index3] > 9 || numbers[index3] < 0 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return phone2;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  let numbersString = string.replace(/\D/g, '');

  let arrayNumStr = numbersString.split('');

  let sum = 0;

  for (let index in arrayNumStr) {
    sum += parseInt(arrayNumStr[index]);
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }

  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
