export default function LoginPage() {
  return (
    <div className="login">
      <span className="loginTitle"> Login</span>
      <form className="loginForm">
        <label>
          <input type="text" placeholder="username" />{" "}
        </label>
        <label>
          <input type="password" placeholder="password" />{" "}
        </label>
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}
