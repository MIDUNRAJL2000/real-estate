import "./App.css";
import Component2 from "./Components/Comp1/Component2";
import Header from "./Components/Comp1/Header";
import Hero from "./Components/Comp1/Hero";
import "./input.css";

function App() {
  return (
    <div className="App px-10">
      <Header />
      <Hero />
      <Component2 />
    </div>
  );
}

export default App;
