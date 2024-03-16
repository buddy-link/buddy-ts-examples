import Header from "./components/Header";
import { initBuddyState } from "buddy.link";

initBuddyState({});

const App = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <input
          placeholder="Oranization name"
          className="font-lg px-4 py-8 rounded-2xl"
        />
      </div>
    </main>
  );
};

export default App;
