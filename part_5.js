// Part 5: Schedulers
import{ asyncScheduler, observeOn, of } from "rxjs";
const obsOf = of("Hello", "from", "Skillsoft");
console.log("Before subscribing");
obsOf
  .pipe(
    observeOn(asyncScheduler)
  )
  .subscribe(
  x => console.log(x)
);
// obsOf.subscribe(
//   x => console.log(x)
// );
console.log("After subscribing");