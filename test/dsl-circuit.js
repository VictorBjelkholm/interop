// const combinations = ['browser', 'js-relay', 'go-relay', 'js', 'go']
const combinations = ['go', 'js', 'chrome']

const allPossibleCases = (combs) => {
  // const len = combs.length * combs.length
  // find all other cases that is not itself
  // add combination with itself + itself
  // then add itself + all others
  // const cases = []
  const amountDown = combs.length
  function getCombs (allCombs, current, left) {
    if (left === 0) return current
    console.log(left)
    return getCombs(allCombs, current, left - 1)
  }
  const cases = getCombs(combs, [], amountDown)
  // for (const comb of combs) {
  //   console.log(comb)
  //   cases.push([comb, comb])
  //   for (const combscomb of combs) {
  //     if (comb === combscomb) continue
  //     console.log(combscomb)
  //     cases.push([comb, combscomb])
  //   }
  // }
  // for (var i = 0; i < ; i++) {
  //   const first = i % 2 === 0 ? 1 : 0
  //   const second = i % 2 === 0 ? 0 : 1
  //   console.log(combs[first], combs[second])
  //   console.log(combs[second], combs[first])
  // }
  return cases
}

console.log(allPossibleCases(combinations))
