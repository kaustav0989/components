import React from "react";
import { faker } from '@faker-js/faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today {props.time} PM</span>
                </div>
                <div className="text">{props.comment}!</div>
                </div>
            </div>
    );
}

export default CommentDetail;