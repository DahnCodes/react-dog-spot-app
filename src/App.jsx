import "./App.css";
import { myData } from "./assets/data";
import { Cards } from "./components/Card";

function App() {
  return (
    <>
      <header>
        <h1 className="title">DOG SPOT</h1>
        <h3 className="welcome">
          Hey! Dog lover, Welcome to{" "}
          <span className="title-span">Dog Spot</span>. Adopt Abandoned Dogs
          here
        </h3>
      </header>
      <main>
        <section className="potrait">
          {myData.map((dog, index) => (
            <Cards
              key={index}
              breed={dog.breed}
              name={dog.name}
              price={dog.price}
              imgSrc={dog.imgSrc}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
