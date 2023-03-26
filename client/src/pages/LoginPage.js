export default function LoginPage() {
  return (
    <div className="login">
      <span className="loginTitle"> Login</span>
      <form className="loginForm">
        <label>
          <input className="loginInput" type="text" placeholder="username" />{" "}
        </label>
        <label>
          <input  className="loginInput"  type="password" placeholder="password" />{" "}
        </label>
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}
