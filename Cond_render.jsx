import Password from "./Password";


export default function App() {


  return (
    <>
      <Password isValid = {true}/>
    </>
  );
}
///

const ValidMessage = () => {
  return <>
    <h1>Password is valid</h1>
  </>;
};
const InValidMessage = () => {
  return <>
    <h1>Password is not valid</h1>
  </>;
};

const Password = ({isValid}) => {
  if (isValid) {
    return (
      <>
        <ValidMessage />
      </>
    );
  }
  return (
    <>
      <InValidMessage />
    </>
  );
};

export default Password

/// 2nd example

import Cart from './Cart.jsx'

export default function App() {


  return (
    <>
    <Cart/>
    </>
  );
}

//


const Cart = () => {
  const items = ["vegetables", "mobile", "clothes", "milk"]
  return (
    <div>
      {items.length && <h1>You have {items.length} in your cart</h1>}
      {items.map((item) => (
        <li key = {Math.random()}>{item}</li>
      ))}
    </div>
  )
}

export default Cart;