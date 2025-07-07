import Copy from './Copy'

export default function App() {


  return (
    <>
    <Copy/>
</>
  );
}

///




const Copy = () => {
  const copyhandeling = () => {
    console.log(`stop stealing my content`);
  }
  return (
    <div>
      <p onCopy={copyhandeling}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam illum inventore, aliquam repellendus, tenetur nisi iusto rem maiores molestias mollitia! Odit, ipsum! Maiores quisquam eius accusantium porro tempore quis!</p>
    </div>
  )
}

export default Copy
 