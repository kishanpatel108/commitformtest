import React from 'react'

const CommentList = (props) => {
    // console.log("props",props.allcomment);
    if(props.allcomment.length == 0)
    {
        return <h6>no comments</h6>
    }
  return (
    <div>
        <ul>
            {
                props.allcomment.map(item=>{
                    return <li key={item.id}>{item.text}</li>
                })
            }
        </ul>
    </div>
  )
}

export default CommentList