// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
    return sum + " copos de água";
  }

  return sum + " copo de água";
}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
