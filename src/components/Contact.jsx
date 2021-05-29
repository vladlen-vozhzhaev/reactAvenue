import React from "react";

export class Contact extends React.Component{
    constructor() {
        super(); // Вызов родительского конструктора
        this.state = { // Обьект состояния компонента
            name: "",
            email: "",
            msg: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Вызван конструктор КОнтакта")
    }
    componentDidMount() {
        console.log("Вызван componentDidMount КОнтакта")
    }
    componentWillUnmount() {
        console.log("Вызван componentWillUnmount КОнтакта")
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('msg',this.state.msg);
        fetch('http://2601.vozhzhaev.ru/php/sendMail.php',{
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.text())
            .then(result=>console.log(result))
    }

    handleChange(event){
        const name = event.target.name;
        const value= event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log("Вызван render КОнтакта")
        return (
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you
                                as soon as possible!</p>
                            <div className="my-5">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-floating">
                                        <input value={this.state.name} onChange={this.handleChange} name="name" className="form-control" id="inputName" type="text"
                                               placeholder="Enter your name..."/>
                                        <label htmlFor="inputName">Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input value={this.state.email} onChange={this.handleChange} name="email" className="form-control" id="inputEmail" type="email"
                                               placeholder="Enter your email..."/>
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                    <textarea value={this.state.msg} onChange={this.handleChange} name="msg" className="form-control" id="inputMessage"
                                              placeholder="Enter your message here..." style={{height: '12rem'}}></textarea>
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                    <br/>
                                    <button className="btn btn-primary text-uppercase" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }


}