import "./style.css";
import React from "react";
import MoviesGallery from "./components/MoviesGallery";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  const [formData, setFormData] = React.useState({
    search: "",
    year: "",
    type: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormData((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <NavBar />
      <Form handleChange={handleChange} values={formData} />
      <MoviesGallery filters={formData} />
    </div>
  );
}

export default App;
