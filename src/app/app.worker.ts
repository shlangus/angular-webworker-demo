/// <reference lib="webworker" />
import { interval } from "rxjs";
import { map } from "rxjs/operators";

addEventListener("message", ({ data }) => {
  console.log(`worker got message: ${data}`);
  interval(2000)
    .pipe(
      map(() => Date.now())
    )
    .subscribe(value => {
      postMessage(value);
    });
});
