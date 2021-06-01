import { Component } from "@angular/core";

const worker = new Worker("./app.worker", { type: "module" });
worker.onmessage = ({ data }) => {
  console.log(`page got message: ${data}`);
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-webworker-demo";

  pingWorker() {
    worker.postMessage("ping");
  }
}

