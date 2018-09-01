import React from "react";
import { getArticle } from "../../axios/axios";

export default class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: null
        }
    };

    componentDidMount() {
        const self = this;
        getArticle(this.props.match.params.id).then(res => {
            self.setState({
                content: res.data
            });
        });
    };

    render() {
        return (
            <div>
                {/* <h1>{title}</h1> */}
                <div>
                    {/* <span>{modifyTime}</span>
                    <span>阅读{readednum}</span>
                    <span>评论{commentnum}</span>
                    <span>喜欢{likednum}</span> */}
                    <article dangerouslySetInnerHTML={{ __html: this.state.content }}></article>
                </div>
            </div>
        );
    };
}