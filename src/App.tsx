import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
