import "./assets/tailwind.css";
import Header from "./components/Header";
import Photo from "./components/Photo";
import MidDiv from "./components/MidDiv";

function App() {
  return (
    <>
      <Header />
      <MidDiv />
      <div className="grid gap-4 auto-rows-min p-16"><Photo /></div>
    </>
  );
}

export default App;
