import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (  
    <div className="container background">
        <div className="row mobile-view">
          <div className="col-8">
            <h1 className="heading1">Sign In to </h1>
            <h1 className="heading2"> View Your Profile Direct</h1>
            <h6 className="subheading">If you don't have an account logged in ever, <a href="sign-up">Signup here!</a></h6>
          </div>
          <div className="col img img-fluid mobile-view2">
            <img src="/images/pic.png" alt="img"/>
          </div>
          <div className="col-4">
            <form >
              <input type="email" className="form-control mb-3 bg-light input_fields1" id="exampleFormControlInput1" placeholder="E-mail/Phone number"/>
              <input type="password" className="form-control mb-5 bg-light input_fields2" id="inputPassword2" placeholder="Password"/>
              <button type="submit" className="btn signin-button form-control mb-5">Sign in</button>
              <div className="mb-5 can"> Can Also sign in through </div>
              <div className="container icons">
                <div className="row ">
                  <div className="col">
                    <button className="google-container"><img src="/images/google.png" alt="google" width={30} height={25}/></button>
                  </div>
                  <div className="col">
                    <button className="facebook-container" ><img src="/images/facebook.png" alt="facebook"  width={30} height={25}/></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col laptop-view img img-fluid">
            <img src="/images/pic.png" alt="img"/>
          </div>
        </div>
      </div>    
  );
}

export default App;