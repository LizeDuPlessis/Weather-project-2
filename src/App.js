import "./index.css";
import WeatherContainer from "./Components/WeatherContainer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WeatherContainer />
      </main>
    </div>
  );
}

export default App;
