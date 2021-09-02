import React,{useEffect,useState} from 'react'
import axios from 'axios'
const App = () => {
  const[post,setPost]=useState([])
  const[show,setShow]=useState(false)
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        console.log(res)
        setPost(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])
  return (
    <div>
      <h1>Data fetching using React</h1>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show &&
      <p>{post.map(posts=><li key={posts.id}>{posts.title}</li>)}</p>}
    </div>
  )
}

export default App
