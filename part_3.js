// Part 1-3: Pipeable operators
import { Observable, from, of } from 'rxjs';
import { filter, map, reduce } from 'rxjs';

// const observable = of("a", "b", "c");
const observable = from([ 1, 2, 3, 4, 5, 6 ]);
// const observable = new Observable(obs => 
//   obs.next("Hello")
// );

const observer = {
  next: aValue => console.log("We got " + aValue)
};

const result = observable
  .pipe(
    map((eachValue) => eachValue * 3),
    filter((num) => num % 2 === 0),
    reduce((startValue, currentValue) => startValue + currentValue)
  );
result.subscribe(observer);
// observable.subscribe(observer);