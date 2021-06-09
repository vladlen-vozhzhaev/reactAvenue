import React from "react";
import {Link} from "react-router-dom";

function PostPreview(props){
    return (
        <div className="post-preview">
            <Link to={"/post/"+props.id}>
                <h2 className="post-title">{props.title}</h2>
                <h3 className="post-subtitle">{props.content}</h3>
            </Link>
            <p className="post-meta">
                Posted by
                <a href="#!">{props.author}</a>
                on {props.add_date}
            </p>
        </div>
    )
}

export class Main extends React.Component{
    constructor() {
        super();
        this.state = {
            postPreview: []
        }
    }
    componentDidMount() {
        fetch("http://2601.vozhzhaev.ru/php/handlerGetPosts.php",{
            cors: "no-cors"
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    postPreview: result.map((post,index)=><PostPreview
                        title={post.title}
                        id={post.id}
                        add_date={post.add_date}
                        content={post.content.substr(0,90)+'...'}
                        author={post.author}
                        key={index}
                    />)
                })

            })
    }

    render() {
        return (
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {this.state.postPreview}
                        <hr className="my-4"/>
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        )
    }
}