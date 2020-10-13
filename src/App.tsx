import React from "react";
import "./App.css";
import { haiku, isItRainingToday, tweetsPostedLastMonth } from "./Workshop";

const myNewHaiku = haiku({ a: "hello", b: "hello", c: "it's me" });

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>TypeScript is cool</p>
      </header>
    </div>
  );
};

export default App;
