
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
import Card from "./components/Card"; 
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus"
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
      <Card>
        <h1>my card</h1>
        <p>Lorem, ipsum dolor.</p>
      </Card>
      <Card>
        <h1>my card 2</h1>
        <p>Lorem, ipsum dolor.</p>
      </Card>
      <Weather />
      <UserStatus loggedIn = {true} isAdmin = {false}/>
    </div>
  );
};

export default App;