import { render , screen  } from "@testing-library/react";
import CommentList from "../component/CommentList";

test('comment are not availabel',()=>{
    render(<CommentList allcomment={[]}/>)

    const h2Element = screen.getByText('no comments',{exact:false})
    expect(h2Element).toBeInTheDocument()
})

test('List all Comments',()=>{
    const comment =[
        {id:1,text:"comment 1"},
        {id:2,text:"comment 2"},
        {id:3,text:"comment 3"},
    ]
    render(<CommentList allcomment={comment}/>)
    
    const h2Element = screen.queryByText('no comments',{exact:false})
    expect(h2Element).not.toBeInTheDocument()

    const commentList = screen.getAllByRole("listitem")
    expect(commentList.length).toBe(comment.length)
})