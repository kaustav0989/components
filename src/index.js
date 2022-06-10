import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" time="4:40" comment="Hi" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail  author="Srm" time="6:40" comment="Hello" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail  author="Sum" time="8:50" comment="Bolo" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector("#root"));