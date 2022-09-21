import React,{useState} from 'react'

const CommentForm = (props) => {
  console.log("props",props);
  const [text,setText] = useState("")
  const [checked,setChecked] = useState(false)

  const postcomment = () =>{
   props.setComments((prev)=>[...prev,{id:Date.now(),text:text}])
    setText("")
  } 

  // const postcomment =async () =>{
  //     const res = await fetch('http://localhost:5000/addcomment',{
  //       method:"post",
  //       headers:{
  //         'Content-Type':"application/json"
  //       },
  //       body:JSON.stringify({
  //         text:text
  //       })
  //     })
  //     const result = await res.json()
  //     props.setComments((prev)=>[...prev,result])
  //       setText("")
  //   }

  return (
    <div data-testid="maindiv">
          <h2>comment form</h2>
          <input 
            placeholder="write your comment here"
            value={text} 
            onChange={e => setText(e.target.value)}
          />
          <input 
            type="checkbox"
            id="checkbox"
            // defaultChecked={checked}
            value={checked}
            onChange={()=> setChecked(!checked)}
          />  
          <label htmlFor="checkbox">    
            I agree to terms and conditions
          </label>
         <button 
          disabled={!checked || !text} 
          onClick={postcomment}
         >
           comment
         </button>
    </div>
  )
}

export default CommentForm