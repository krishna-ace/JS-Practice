function findLargest(a) {
  let max = a[0]
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i]
    }
  }
  return max
}

console.log(findLargest([3, 7, 2, 9, 5]))