// Part 7: combineLatest()
import { of, combineLatest, map } from "rxjs";

const volts = of(110, 96, 48, 24, 12, 36);
const watts = combineLatest([volts]).pipe(
  map(([v]) => v)
);

watts.subscribe(
  watts => console.log(`Watts: `, watts)
);