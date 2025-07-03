import Props from "./Props";

export default function App() {


  return (
    <>
      <Props>
        <h1>this will be shown in the props</h1>
        <h2>Hello everyone</h2>
      </Props>
    </>
  );
}

///


const Props = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Props
