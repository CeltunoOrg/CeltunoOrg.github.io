import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, useParams } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Activities from "./components/activities";
import './index.css';
import "../styles/App.css"
// import '../styles/tmpstyle.module.css'
import App from './App';
import App3 from "./App3";
import DeviceView from "./components/deviceView";
// import App2 from './App2';


// function BlogPost() {
// let { ids } = useParams();
// console.log("tId: "+ ids)
// return <div style={{ fontSize: "50px" }}>
//        Now showing post {ids}
//      </div>;
// }
const cont = document.getElementById('root');
const root = createRoot(cont!);


const AppChoice = (choice: number) => {
    if (choice === 2) {
        // return <App2 isOpen3={false} />
    }
    else if (choice === 3) {
        return <App3 isOpen3={false} />
    }
    else if (choice === 4) {
        return <Activities isOpen={false} />
    }
    else if (choice === 5) {
        return <DeviceView hideAll={true} />
    }
    else {
        return <App />
    }
}
root.render(
    <div className="App ">
<HashRouter>

        {/* <BrowserRouter> */}

            {AppChoice(3)}

        {/* </BrowserRouter> */}
</HashRouter>
    </div>
);