import { useState } from "react";
import "./App.css";
import Commentform from "./component/CommentForm";
import CommentList from "./component/CommentList";

function App() {
 const [comment , setComment] = useState([])

  return (
    <div className="App">
      <Commentform setComments={setComment}/>
      <CommentList allcomment={comment}/>
    </div>
  );
}

export default App;
