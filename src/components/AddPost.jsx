import React from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export class AddPost extends React.Component{
    constructor() {
        super();
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            content: "",
            author: ""
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.getSunEditorInstance = this.getSunEditorInstance.bind(this);
    }
    handlerChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('title',this.state.title);
        formData.append('content',this.sunEditorRef.current.getContents());
        formData.append('author',this.state.author);
        fetch('http://2601.vozhzhaev.ru/php/handlerAddPost.php',{
            method: "post",
            cors: 'no-cors',
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
    }
    getSunEditorInstance(sunEditor) {
        this.sunEditorRef.current = sunEditor;
    };
    render() {
        return (
            <div className="container">
                <div className="col-md-10 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input name="title" onChange={this.handlerChange} value={this.state.title} type="text" className="form-control" placeholder="Заголовок"/>
                        </div>
                        <div className="mb-3">
                            <SunEditor
                                getSunEditorInstance={this.getSunEditorInstance}
                                height="400px"
                                placeholder="Контент"

                                setOptions={{
                                    katex: "window.katex",
                                    buttonList: [
                                        [
                                            "undo", "redo", "font", "fontSize", "formatBlock", "paragraphStyle",
                                            "blockquote", "bold", "underline", "italic", "strike",
                                            "subscript", "superscript", "fontColor", "hiliteColor", "textStyle",
                                            "removeFormat", "outdent", "indent", "align", "horizontalRule", "list",
                                            "lineHeight", "table", "link", "image", "video", "audio", "math", "imageGallery",
                                            "fullScreen", "showBlocks", "codeView", "preview", "print", "save", "template"
                                        ]
                                    ],
                                }}/>
                        </div>
                        <div className="mb-3">
                            <input name="author" onChange={this.handlerChange} value={this.state.author} type="text" className="form-control" placeholder="Автор"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Добавить пост"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
