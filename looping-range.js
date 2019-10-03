function range(start, end, step) {
  let series = [];
  if ( start === null || end === null || step === null || end < start || step < 0 ){
    series = [];
  } else {
    for (let i = start; i <= end; i = i + step) {
      series.push(i);
    }
  }
  return series;
}