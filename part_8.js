// Part 8: merge, mergeMap, forkJoin, concat, zip
import { of, merge, forkJoin, zip, mergeMap, map } from "rxjs";
const volts = of(110, 96, 48, 24);
const amps = of(4, 3, 6);
const watts = volts.pipe(
  mergeMap((v) => amps.pipe(
    map((a) => v * a)
  ))
);
watts.subscribe((w) => console.log(w));

//const zipped = zip(volts, amps);
//zipped.subscribe((zpd) => console.log({ zpd }));
// const forkJoined = forkJoin({ volts, amps });
// forkJoined.subscribe((forkJoined) => console.log({ forkJoined }));
// const concated = merge(volts, amps);
// concated.subscribe((merged) => console.log({ merged }));