
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
// import WelcomHomeMessage from "./components/WelcomHomeMessage";
import Lists from "./components/Lists";
import List from "./components/List";
import ProductList from "./components/ProductList";
import Person from "./components/Person";
import Product from "./components/Product";
import Review from "./components/Review";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {/* <WelcomHomeMessage /> */}
      <Lists />
      <List />
      <ProductList />
      {/* props and destructuring */}
      <Person name = "chandu" age = {21}/>
      <Product name = "iphone" price = {39} />
      <Review name = "super" stars = {"3tomatoes"} />
    </div>
  );
};

export default App;