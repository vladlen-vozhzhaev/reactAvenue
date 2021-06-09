import React from "react";

export class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pass: ""
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }

    handlerChange(event){
        const name = event.target.name;
        const value= event.target.value;
        this.setState({
            [name]: value
        });
    }

    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("email",this.state.login);
        formData.append("pass",this.state.pass);
        fetch("https://2601.vozhzhaev.ru/php/handlerAuth.php",{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input name="login" onChange={this.handlerChange} type="text" className="form-control" placeholder="Login"/>
                        </div>
                        <div className="mb-3">
                            <input name="pass" onChange={this.handlerChange} type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}