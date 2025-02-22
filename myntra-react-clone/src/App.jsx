import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";

function App() {
  const item = {
    id: "004",
    image: "images/4.jpg",
    company: "ADIDAS",
    item_name: "Indian Cricket ODI Jersey",
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2025",
    rating: {
      stars: 5.0,
      count: 10,
    },
  };
  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItem item={item}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
