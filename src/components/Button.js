/*we grab the props object that contains a list of all the values 
that we pass when we use the component, see lines 18-24 in App.js */
const Button = (props) => {
  console.log(props);
  //whenever we want to use javascript code in JSX we need to wrap it around curly braces
  return (
    <button onClick={() => props.myFunction("hey Anselm!")}>
      {/* props is an object so we use dot notation to retrieve each value */}
      {props.text} {props.mySecondProps}
    </button>
  );
};

export default Button;
