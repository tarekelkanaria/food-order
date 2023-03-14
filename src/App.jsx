import "./App.css";
import Header from "./components/Layout/Header/Header";
import Landing from "./components/Layout/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
