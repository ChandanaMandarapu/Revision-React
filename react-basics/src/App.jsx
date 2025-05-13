
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
import WelcomHomeMessage from "./components/WelcomHomeMessage";
import Lists from "./components/Lists";
import List from "./components/List";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <WelcomHomeMessage />
      <Lists />
      <List />
      <ProductList />
    </div>
  );
};

export default App;