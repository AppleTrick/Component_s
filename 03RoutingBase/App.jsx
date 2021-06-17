import React, {useState} from "react";
import Home from "./src/Home";
import About from "./src/About";
import NotFound from "./src/NotFound";


const App = () => {
    const [comp, setComp] = useState(Home);

    return(
        <>
            <header>
                <button onClick= {()=>setComp(Home)}>Home</button>
                <button onClick= {()=>setComp(About)}>About</button>
                <button onClick= {()=>setComp(NotFound)}>Users</button>
            </header>
            <hr/>
            <div children={comp}/>
            {/* 자식요소의 컴포넌트를 받아올 수 있음 */}
        </>
    );
}

export default App