import "../src/components/form.css";
import FormComponent from "./components/Form";

function App() {
  return (
    <>
      <div className="header">
        <h1 className="title"> Hello World!</h1>
      </div>
      <div className="form-container">
        <FormComponent />
      </div>
    </>
  );
}

export default App;
