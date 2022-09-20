import React,{useState} from 'react'

const CommentForm = ({setComments}) => {
  const [text,setText] = useState("")
  const [checked,setChecked] = useState(false)

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
          onClick={()=>console.log('clicked')}
         >
           comment
         </button>
    </div>
  )
}

export default CommentForm