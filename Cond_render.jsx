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
