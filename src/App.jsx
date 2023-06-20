import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotals} from "./features/cart/cartSlice.jsx";
import {useEffect} from "react";
import Modal from "./components/Modal.jsx";


function App() {
    const {cartItems} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(calculateTotals());

    },[cartItems])

  return (
    <main>
        <Modal/>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
