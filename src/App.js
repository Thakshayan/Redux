
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (

      <Router>
      <Header/>
          <Routes>
            <Route path="/" exact component={ProductListing} element={<ProductListing/>}/>
            <Route path="/product/:productId" exact component={ProductDetail} element={<ProductDetail/>}/>
            <Route  exact>404 Not Found!</Route>
          </Routes>
      </Router>
   
  );
}

export default App;
