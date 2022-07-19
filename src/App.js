import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button.js";

import Navbar from "./components/Navbar.js";
import MyTextComponent from "./components/MyTextComponent";

function App() {
  const handleClick = (message) => console.log(message);

  //it's JSX, not HTML
  return (
    <div className="App">
      <h1>hello</h1>

      <Navbar />
      <MyTextComponent />
      <Button
        text="Amazing button"
        mySecondProps="hello!!"
        myFunction={handleClick}
      />
      <Button text="Very bad button" />
      <Button text="Button that works" />
    </div>
  );
}

export default App;
