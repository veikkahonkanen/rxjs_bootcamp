// Part 4: Special observable Subject
import { Subject } from 'rxjs';
const subject = new Subject();
subject.next('Nice courses');
const s1 = subject.subscribe(
  value => console.log(`The data is ${value}.`)
);
subject.next('Skillsoft rocks');
const s2 = subject.subscribe(
  // value => console.log(`The data is ${value}.`)
  value => console.log(`${value.toUpperCase()}, is the data`)
);
subject.next('Skillsoft');