function accum(s) {
  return s
    .split("")
    .map((char, index) => {
      // Capitalize the character first
      char = char[0].toUpperCase();
      // Then repeat based on index
      return char + char.repeat(index);
    })
    .join("-");
}

console.log(accum("abcwfeZ")); // Output: "A-Bb-Ccc-Www-Eeee"

/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  return s
    .split("")
    .map((char, index) => {
      // Capitalize the first character
      const firstChar = char.toUpperCase();
      // Repeat the rest of the characters in lowercase
      const repeatedChars = char.toLowerCase().repeat(index);
      return firstChar + repeatedChars;
    })
    .join("-");
}

console.log(accum("abcwfeZ")); // Output: "A-Bb-Ccc-Www-Ffff-Eeeee-Zzzzzz"
