import React, {useState} from "react";
import Home from "./src/Home";
import About from "./src/About";
import NotFound from "./src/NotFound";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";


const App = () => {
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
                </header>
                <hr/>
                <main>
                    {/* Switch를 통해 정확하게 보내서 갈길수 있다. */}
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route path ="/about" component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default App