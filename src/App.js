import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {Footer} from "./components/Footer";
function App() {
  return (
    <div>
        <BrowserRouter>
            <Menu/>
            <PageHeader/>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact-us">
                <Contact/>
            </Route>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
