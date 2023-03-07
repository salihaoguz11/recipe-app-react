import meal from "../../assets/meal.svg";
import { FormContainer, LoginContainer } from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <img src={meal} alt="" width={250} />
        <h1> Recipe</h1>
        <form action="">
          <input type="text" placeholder="Enter username" />
          <input type="text" placeholder="Enter password" />
          <button type="submit">LOGIN</button>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
