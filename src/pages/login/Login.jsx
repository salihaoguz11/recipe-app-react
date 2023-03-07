import meal from "../../assets/meal.svg";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledImg,
} from "./Login.style";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="" />
        <Header> Recipe</Header>
        <StyledForm action="">
          <StyledInput type="text" placeholder="Enter username" />
          <StyledInput type="password" placeholder="Enter password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
