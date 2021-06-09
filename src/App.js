import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {Footer} from "./components/Footer";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";
import React from "react";
import {Auth} from "./components/Auth";
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            pageTitle: "Clean Blog!"
        }
        this.handlerChangeTitle = this.handlerChangeTitle.bind(this);
    }

    handlerChangeTitle(title){
        this.setState({
            pageTitle: title
        });
    }


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu/>
                    <PageHeader title={this.state.pageTitle}/>
                    <Route exact path="/" component={()=><Main/>}/>
                    <Route path="/post" component={()=><Post
                        handlerChangeTitle={this.handlerChangeTitle}
                    />}/>
                    <Route path="/addPost" component={()=><AddPost/>}/>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/auth" component={()=> {
                        this.handlerChangeTitle("Авторизация");
                        return <Auth/>
                    }}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;