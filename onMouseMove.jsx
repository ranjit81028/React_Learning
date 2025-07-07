import Mouse from './Mouse'

export default function App() {


  return (
    <>
    <Mouse/>
</>
  );
}

///

const Mouse = () => {
  const mouseHandeler = () => {
    alert(`hovering over the content`)
    console.log(`mouse movement captured`);
  }
  return (
    <div>
      <p onMouseMove={mouseHandeler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam illum inventore, aliquam repellendus, tenetur nisi iusto rem maiores molestias mollitia! Odit, ipsum! Maiores quisquam eius accusantium porro tempore quis!</p>
    </div>
  )
}

export default Mouse
 