import Props from "./Props";

export default function App() {
  const user = {
    name: "ranjit",
    age: 20,
    location: "kharagpur",
    email: "ranjit@gmail.com"
  };

  return (
    <>
      <Props user={user} ismarried = "false" />
    </>
  );
}



// this are props component



const Props = ({ user, ismarried }) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>age: {user.age}</h1>
      <h1>location: {user.location}</h1>
      <h1>email: {user.email}</h1>
      <h1>isMarried: {ismarried}</h1>
    </div>
  )
}

export default Props
