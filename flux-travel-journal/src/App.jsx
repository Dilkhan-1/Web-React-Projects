import Header from "./components/Header";
import Card from "./components/Card";
import "./index.css";
import data from "./data.js"


export default function App() {
  return (
    <>
      <Header />
      {data.map((item) => (
        <Card
          key={item.id}
          // item={item}
          {...item}
        />
      ))}

    </>
  );
}
