import React, {useState} from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";

import Home from "./src/Home";
import About from "./src/About";
import Users from "./src/Users";
import Profile from "./src/Profile";
import AuthRoute from "./AuthRoute";

import NotFound from "./src/NotFound";
import LoginForm from "./src/LoginForm";
import LogoutButton from "./src/LogoutButton";

import { signIn } from './auth';

const App = () => {

    const [user, setUser] = useState(null); // 초기값 설정안함
<<<<<<< HEAD
    const authenticated = user != null; // user가 존재하면 true 존재하지 않으면 false

=======
    //authenicated 유저가 존재하면 true 아니면 false
    const authenticated = user != null;
>>>>>>> c3ae9b47d041b4c48472195590f05e49c351507e
    const login = ({email, password}) => setUser(signIn({email, password}));
    const logout = () => setUser(null);

    return(
        <>
            <Router>
                <header>
                    <Link to = "/" >
                        <button>Home</button>
                    </Link>
                    <Link to = "/about">
                        <button>About</button>
                    </Link>
                    <Link to = "/users">
                        <button>Users</button>
                    </Link>
                    <Link to = "/profile">
                        <button>Profile</button>
                    </Link>
                    {authenticated ? (<LogoutButton logout={logout} />) : (
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    )}
                </header>
                <hr/>
                <main>
                    {/* Switch를 통해 정확하게 보내서 갈길수 있다. */}
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route path ="/about" component={About}/>
                        <Route path ="/users" component={Users}/>
                        <Route
                            path="/login"
                            render = { props => (
                                <LoginForm authenticated={authenticated} login={login} {...props} />
                            )}
                        />
                        <AuthRoute authenticated={authenticated} path="/profile" render = {props => <Profile user= {user} {...props}/> }/>
                        {/* <Route path ="/profile" component={Profile}/> */}
                        <Route component={NotFound}/>
                        
                    </Switch>
                </main>
            </Router>
        </>
    );
}
export default App