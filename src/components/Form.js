import React from "react";

function Form({ handleChange, values }) {
  const createNumbersOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1960; i < currentYear; i++)
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );

    return options;
  };

  const numbersOptions = React.useMemo(() => createNumbersOptions(), []);

  return (
    <form>
      <div className="form--search-container">
        <div className="form--search-title">Search</div>
        <input
          type="text"
          name="search"
          value={values.search}
          placeholder="Full movie name: Spider-Man"
          onChange={handleChange}
          className="form--search"
        ></input>
      </div>
      <div className="form--seconde-part">
        <div className="form--select-container">
          <label htmlFor="year"> Year of release </label>
          <select id="year" onChange={handleChange} name="year">
            <option value="">--All--</option>
            {numbersOptions}
          </select>
        </div>
        <div className="form--select-container">
          <label htmlFor="type"> type </label>
          <select id="type" onChange={handleChange} name="type">
            <option value="">--All--</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
