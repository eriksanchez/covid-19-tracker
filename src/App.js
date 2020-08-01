import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "India"]);
  useEffect(() => {
    // asyn => send a request, wait for it, do something with it
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, //UK, USA, FR
          }));
        });
    };
  }, []);
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select varient="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}

      {/*Title + Select input dropdown field */}

      {/*InfoBoxes*/}
      {/*InfoBoxes*/}
      {/*InfoBoxes*/}

      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}
    </div>
  );
}

export default App;
