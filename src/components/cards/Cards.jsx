import { MainContainer } from "./Cards.styled";
import defaultImage from "../../assets/default-image.jpg";

const Cards = ({ recipes }) => {
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }) => {
        return (
          <div>
            <h1>{recipe.label}</h1>
            <img src={recipe.image || defaultImage} />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
