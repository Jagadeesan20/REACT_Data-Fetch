import React,{useEffect,useState} from 'react'
import axios from 'axios'
const App = () => {
  const[post,setPost]=useState({})
  const[show,setShow]=useState(false)
  const[id,setId]=useState(1)
  const[idFrom,setIdFrom]=useState(1)

  const handleClick=()=>{
    setIdFrom(id)
  }
  
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFrom}`)
      .then(res=>{
        console.log(res)
        setPost(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[idFrom])
  return (
    <div>
      <h1>Data fetching using React</h1>
      <input type='text' value={id} onChange={e=>setId(e.target.value)}></input>
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <div>{post.title}</div>}
      
    </div>
  )
}

export default App
