const Nav = () => {
  return (
    <div>
      <Link to="/">
        <i>{"Saliha"}</i>
        <span>Recipe</span>
      </Link>

      <ul>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </ul>
    </div>
  );
};

export default Nav;
