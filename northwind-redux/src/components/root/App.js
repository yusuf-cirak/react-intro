import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import {Container} from 'reactstrap'
import {Routes,Route} from 'react-router-dom'
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

 function App() {
  return (
    <Container>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/product" exact element={<Dashboard/>}/>
          <Route path="/cart" exact element={<CartDetail/>}/>
          <Route path="/save-product" element={<AddOrUpdateProduct/>}/>
          <Route path="/save-product/:productId" element={<AddOrUpdateProduct/>}/>
           <Route element={<NotFound/>}/> {/*Bu route'lar bulunamadığında NotFound'a gidecek. */}
        </Routes> 
        </Container>
  );
}
export default App;
