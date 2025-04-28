const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export function caesarCipher(string, key) {
  const cipherTable = generateCeaserTable(key);
  let cipheredText = "" 
  for (let char of string.toUpperCase()) {
    if (!alphabet.includes(char)) {
      cipheredText += char
    }
    else {
      let index = alphabet.indexOf(char);
      cipheredText += cipherTable.at(index);
    }
  }
  return applyCasing(string, cipheredText);
}

function generateCeaserTable(key) {
  const table = [];
  for (let character in alphabet) {
    let cipherIndex = +character + key;
    if (cipherIndex > 25) {
      cipherIndex = cipherIndex - 26
    }
    else if (cipherIndex < -25) {
      cipherIndex = cipherIndex + 26
    }
    table.push(alphabet.at(cipherIndex));
  }
  return table;
}


function isUpperCase(text) {
  return text === text.toUpperCase();
} 

function applyCasing(string, cipheredString) {
  let caseSensitiveText = "";
  for (let char in string) {
    if (!alphabet.includes(string.charAt(char).toUpperCase())) {
      caseSensitiveText += string.charAt(char)
    }
    else if (isUpperCase(string.charAt(char))) {
      caseSensitiveText += cipheredString.charAt(char).toUpperCase();
    }
    else {
      caseSensitiveText += cipheredString.charAt(char).toLowerCase()
    }
  }
  return caseSensitiveText;
}