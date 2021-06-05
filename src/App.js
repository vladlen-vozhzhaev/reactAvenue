import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {Footer} from "./components/Footer";
import {Post} from "./components/Post";
function App() {
  return (
    <div>
        <BrowserRouter>
            <Menu/>
            <PageHeader/>
            <Route exact path="/" component={()=><Main/>}/>
            <Route path="/post" component={()=><Post/>}/>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
