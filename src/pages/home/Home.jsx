import axios from "axios";
import { useState } from "react";
import Header from "../../components/header/Header";
import homeSvg from "../../assets/home.svg";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import Cards from "../../components/cards/Cards";

const Home = () => {
  // const APP_ID = process.env.REACT_APP_APP_ID;
  // const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = "23e45066";
  const APP_KEY = "e46daad811879d59137070f92d6bceca	";

  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        mealType={mealType}
        setSelectedMeal={setSelectedMeal}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
