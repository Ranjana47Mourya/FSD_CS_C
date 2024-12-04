import "./App.css";
const App = ({ name, email, mobile }) => {
  return (
    <div id="disp">
      <h1>Name:{name}</h1>
      <h2>Email Id:{email}</h2>
      <h2>Mobile No: {mobile}</h2>
    </div>
  );
};

export default App;
