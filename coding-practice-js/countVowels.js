function countVowels(s) {
  let c = 0
  let v = "aeiouAEIOU"

  for (let i = 0; i < s.length; i++) {
    if (v.includes(s[i])) {
      c++
    }
  }

  return c
}

console.log(countVowels("javascript"))