import Button from './Button'

export default function App() {


  return (
    <>
    <Button/>
    </>
  );
}
////



const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random()*100));
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Button
 
