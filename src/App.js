import './App.css';
import React, { useState } from 'react';
import downarrow from './downarrow.svg';
import refresharrow from './refresh-arrow.png'
import Cuisine from './components/Cuisine';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect';
import { RadioButton } from 'primereact/radiobutton';
import { type } from '@testing-library/user-event/dist/type';
import Restaurant from './components/Restaurant';

function App() {
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState("");
  const [background, setBackground] = useState("");
  const [budget, setBudget] = useState(null);
  const [peopleType, setPeopleType] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [mealType, setMealType] = useState(null);

  const typesOfWeather = [
    { name: 'Sunny', code: 'SU' },
    { name: 'Cloudy', code: 'CL' },
    { name: 'Rain', code: 'RA' },
    { name: 'Snow', code: 'CO' }
  ];

  const typesOfPeople = [
    { name: 'Friends', code: 'FR' },
    { name: 'Family', code: 'FA' },
    { name: 'Significant Other', code: 'SO' },
    { name: 'Coworkers', code: 'CO' },
    { name: 'Clients', code: 'CL' },
    { name: 'New', code: 'NE' }
  ];

  // const typesOfMeals = [
  //   { name: 'Breakfast', code: 'BR' },
  //   { name: 'Lunch', code: 'LU' },
  //   { name: 'Dinner', code: 'DI' },
  //   { name: 'Dessert', code: 'DE' },
  //   { name: 'Snack', code: 'SN' }
  // ];

  var [cuisineChosen, setCuisineChosen] = useState(false);
  var [chosenCuisine, setChosenCuisine] = useState("");
  var [chosenDish, setChosenDish] = useState("");

  const cuisineChoice = (cuisine, dish) => {
    setCuisineChosen(true);
    setChosenCuisine(cuisine);
    setChosenDish(dish);
  };

  return (
    <div className="app">
      <section id="home">
        <div className="blur center">
          <h1>Foodease</h1>
          <a href="#filters" id="start"><p>Where To?</p></a>
          <a href="#filters"><img src={downarrow} href="#filters" className="downarrow" alt="downarrow" /></a>
        </div>
      </section>
      <section id="filters">
        <h2>Filters</h2>
        <div>
          <p className="filter">Weather: <Dropdown value={weather} onChange={(e) => setWeather(e.value)} options={typesOfWeather} optionLabel="name" placeholder="How is the Weather?" /></p>
          <p className="filter">Temperature: <InputNumber value={temperature} onValueChange={(e) => setTemperature(e.value)} useGrouping={false} /></p>
          <p className="filter">Location: <InputText value={location} onChange={(e) => setLocation(e.target.value)} /></p>
          <p className="filter">Budget: <InputNumber value={budget} onValueChange={(e) => setBudget(e.value)} useGrouping={false} /></p>
          <p className="filter">Type of People: <MultiSelect value={peopleType} onChange={(e) => setPeopleType(e.value)} options={typesOfPeople} optionLabel="name" placeholder="Who is Going?" /></p>
          <p className="filter">Number of People: <InputNumber value={numberOfPeople} onValueChange={(e) => setNumberOfPeople(e.value)} useGrouping={false} /></p>
          <p className="filter">Meal Type: 
            <div>
                <div className="radioButton">
                    <RadioButton inputId="breakfast" name="meal" value="Breakfast" onChange={(e) => setMealType(e.value)} checked={mealType === 'Breakfast'} />
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="radioButton">
                    <RadioButton inputId="lunch" name="meal" value="Lunch" onChange={(e) => setMealType(e.value)} checked={mealType === 'Lunch'} />
                    <label htmlFor="lunch">Lunch</label>
                </div>
                <div className="radioButton">
                    <RadioButton inputId="dinner" name="meal" value="Dinner" onChange={(e) => setMealType(e.value)} checked={mealType === 'Dinner'} />
                    <label htmlFor="dinner">Dinner</label>
                </div>
                <div className="radioButton">
                    <RadioButton inputId="dessert" name="meal" value="Dessert" onChange={(e) => setMealType(e.value)} checked={mealType === 'Dessert'} />
                    <label htmlFor="dessert">Dessert</label>
                </div>
                <div className="radioButton">
                    <RadioButton inputId="snack" name="meal" value="Snack" onChange={(e) => setMealType(e.value)} checked={mealType === 'Snack'} />
                    <label htmlFor="snack">Snack</label>
                </div>
            </div>
          </p>
          {/* <p className="filter">Meal Type: <Dropdown value={mealType} onChange={(e) => setMealType(e.value)} options={typesOfMeals} optionLabel="name" placeholder="What Meal is It?" /></p> */}
          {/* <p className="filter">Background: <InputText value={background} onChange={(e) => setBackground(e.target.value)} /></p> */}
          <p className="filter">Background: <InputTextarea value={background} onChange={(e) => setBackground(e.target.value)} rows={1} cols={30} autoResize spellcheck="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" /></p>
        </div>
      </section>
      <section id="recommended">
        <h2>Choose a Recommended Cuisine</h2>
        <div className="choices">
          <Cuisine cuisine="Italian" dish="Magherita Pizza" callback={cuisineChoice} />
          <Cuisine cuisine="Korean" dish="Fried Chicken" callback={cuisineChoice} />
          <Cuisine cuisine="Japanese" dish="Sushi" callback={cuisineChoice} />
        </div>
        <a href="#filters"><img src={refresharrow} href="#filters" className="refresh" alt="refresharrow" /></a>
      </section>
      <section id="restaurant">
        <h2>Restaurant</h2>
        {
          cuisineChosen ? <Restaurant cuisine={chosenCuisine} dish={chosenDish} /> : <></>
        }
      </section>
      <section>
        <h2>Directions</h2>
      </section>
    </div>
  );
}

export default App;
