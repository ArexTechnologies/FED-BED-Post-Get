import './App.css';
// import {useState} from 'react'
import axios from 'axios';
function App() {
  // const [data,setData] = useState([])
 
  // const URL = "http://localhost:5004/api";
  const URL = "http://localhost:5004";
  async function dataPoster(e) { 
    e.preventDefault() 
    await axios({
      method: "post",
      url: URL,
      headers: {  
        "X-Shopify-Access-Token": "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",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // setData([res])
      console.log(res.data);
    });
  } 
  return (
    < >
      
      <button onClick={dataPoster} style={{ margin: "4rem" }}>Get All Products</button> 
     
    </>
  );
}

export default App;
