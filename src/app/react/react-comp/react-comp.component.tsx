import { Component } from "@angular/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

@Component({
  selector: "app-react-comp",
  standalone: true,
  imports: [],
  templateUrl: "./react-comp.component.html",
  styleUrl: "./react-comp.component.scss",
})
export class ReactCompComponent {
  ngOnInit(): void {
    const root = ReactDOM.createRoot(
      document.getElementById("app-react-comp") as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}
