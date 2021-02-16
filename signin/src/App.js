import './App.css';

function App() {
  return (
    <div className="background background-blur">
      <div >
        <h1 className="heading1">Sign In to </h1>
        <h1 className="heading2"> View Your Profile Direct</h1>
        <h6 className="subheading">If you don't have an account logged in ever, <a href="sign-up">Signup here!</a></h6>
      </div>   
      <div className="img">
        <img src="/images/pic.png" alt="img"/>
      </div>   
      <form >
        <input className="input_fields1" type="email" placeholder="E-mail/Phone number"></input><br></br><br></br>
        <input className="input_fields2" type="password" placeholder="Password"></input><br></br><br></br>
        <button className="signin-button">Sign In</button><br></br><br></br>
        <div className="extra">---------------Can Also sign in through--------------</div>
        <div className="google-container"><img src="/images/google.png" className="google" alt="google" width={50} height={30}/></div>
        <div className="facebook-container" ><img src="/images/facebook.png" className="facebook" alt="facebook"  width={50} height={30}/></div>
      </form>
    </div>
  );
}

export default App;
