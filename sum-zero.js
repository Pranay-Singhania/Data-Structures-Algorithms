// Video 1

const sumFast = (b) => {
  li = 0;
  ri = b.length - 1;
  while (li < ri)
    if (b[li] + b[ri] > 0) ri--;
    else if (b[li] + b[ri] < 0) li++;
    else return [b[li], b[ri]];
};
console.log(sumFast(a));
