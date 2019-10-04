import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=> {
    return (
        <div className="ui container coments">  
        <ApprovalCard>         
            <CommentDetail
            author="Voja"
            timeAgo="Today at 4:45PM" 
            content="Nice blog post" 
            avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        
        <ApprovalCard>
           <CommentDetail 
           author="Vlada" 
           timeAgo="Today at 2:00PM" 
           content="I like the subject"
           avatar={faker.image.avatar()} 
           />
        </ApprovalCard>

        <ApprovalCard>
           <CommentDetail 
           author="Uros" 
           timeAgo="Yesterday at 5:00M" 
           content="I like writing" 
           avatar={faker.image.avatar()}
           />
        </ApprovalCard>
 
        </div>  
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
