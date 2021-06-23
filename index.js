const { of, interval  } = require('rxjs')
const { map, mergeMap } = require('rxjs/operators')

// of(1, 2, 3)
//   .pipe(map((x) => x * x), map((x => {
//       console.log('map', x)
//       return x
//   })))
//   .subscribe((v) => console.log(`value: ${v}`));
var obs = interval(1000).pipe(mergeMap(i => i * i))
obs.subscribe(x => console.log(x))