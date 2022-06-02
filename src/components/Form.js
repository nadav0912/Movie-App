import React from "react";

function Form({ handleChange, values }) {
  const numbersOptions = (min, max) => {
    const options = [];
    for (let i = min; i < max; i++)
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );

    return options;
  };

  return (
    <form>
      <div className="form--search-container">
        <div className="form--search-title">Search</div>
        <input
          type="text"
          name="search"
          value={values.search}
          placeholder="Enter movie name..."
          onChange={handleChange}
          className="form--search"
        ></input>
      </div>
      <div className="form--select-container">
        <label htmlFor="year"> Year of release </label>
        <select id="year" onChange={handleChange} name="year">
          <option value="">--All--</option>
          {numbersOptions(1960, new Date().getFullYear())}
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
    </form>
  );
}

export default Form;
