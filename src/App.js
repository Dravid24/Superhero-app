import React, {useState} from 'react';
import './App.css';
import Superhero from './components/Input';
import axios from 'axios';
import Output from './components/Result';
import { Button,Result } from 'antd';


const App = () => {
  const [input,setInput] = useState('');
  const [status,setStatus] = useState('');
  const [name,setName] = useState('');
  const [details, setDetails] = useState([]);


  const FindHero = async () =>{
    const key="2892825827616713";
    const url = "api/" +key+ "/search/"+input;
    const response =await axios.get(url);
    console.log(response);
    const name = await response.data.results[0].name;
    const status = await response.data.response;
    setStatus(status);
    setName(name); 
    setDetails(response.data.results);
    setInput('');
  }

  
  return (
    <div className="App">
    {
      name === "" ? 
      <Superhero input={input} setInput={setInput} FindHero={FindHero}/> 
      : status === 'success' ?
      <Output input={input} name={name} details={details} setName={setName}/> :
      <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, You entered wrong SuperHero name."
                    extra={<Button type="primary">Back Home</Button>}
        />
    } 
    </div>
  );
}

export default App;
