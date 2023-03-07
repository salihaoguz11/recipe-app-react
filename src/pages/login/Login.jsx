import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const userInfo = {
    username: "admin",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="" />
        <Header> Recipe</Header>
        <StyledForm onClick={handleSubmit} action="">
          <StyledInput type="text" placeholder="Enter username" />
          <StyledInput type="password" placeholder="Enter password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
