// p0 = 1000 (starting pop), aug = % increase, p = target
// +50 p every year in addition to aug (annual increase)
// nbYear should return n number of entire years needed to get a population greater or equal to p.

// aug = inhabitants coming or leaving each year,
// percent a positive or null floating number,
// p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let totalPop = p0;
  let count = 0;

  while (p >= totalPop) {
    totalPop += totalPop * (percent / 100) + aug;
    count++;
  }
  console.log(count);
  return count;
}

nbYear(1500, 5, 100, 5000); // --> 15

nbYear(1500000, 2.5, 10000, 2000000); // --> 10
