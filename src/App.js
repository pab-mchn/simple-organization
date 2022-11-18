import Activities from "./components/Activities/Activities";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Activities />
    </DataProvider>
  );
}

export default App;
