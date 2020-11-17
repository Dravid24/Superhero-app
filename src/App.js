import React, {useState} from 'react';
import './App.css';
import Superhero from './components/Input';
import axios from 'axios';
import Output from './components/Result';
import { Button,Result } from 'antd';


const App = () => {
  const [input,setInput] = useState('');
  const [status,setStatus] = useState('');
  const [details, setDetails] = useState([]);


  const FindHero = async () =>{
    const url = "https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2892825827616713/search/"+input;
    const response =await axios.get(url);
    console.log(response);
   
    const status = await response.data.response;
    setStatus(status);
    setDetails(response.data.results);
    setInput('');
  }

  
  return (
    <div className="App">
    {
      status === 'error' ?
      <Result
                    status="404"
                    title="Sorry, You entered wrong SuperHero name."
                    subTitle="Please enter valid SuperHero name"
                    extra={<Button type="primary" onClick={() =>{setStatus("")}}>Back Home</Button>}
        /> : status === "success" ?  
        <Output input={input} details={details} setStatus={setStatus}/> :
        <Superhero input={input} setInput={setInput} FindHero={FindHero}/> 
    } 
    </div>
  );
}

export default App;
