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
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);
  const [publisher, setPublisher] = useState('');


  const FindHero = async () =>{
    const key="2892825827616713";
    const url = "api/" +key+ "/search/"+input;
    const response =await axios.get(url);
    console.log(response);
    const image = await response.data.results[0].image.url;
    const name = await response.data.results[0].name;
    const status = await response.data.response;
    const gender = await response.data.results[0].appearance.gender;
    const height =await response.data.results[0].appearance.height[1];
    const weight = await response.data.results[0].appearance.weight[1];
    const publisher = await response.data.results[0].biography.publisher;
    setStatus(status);
    setName(name); 
    setImage(image);
    setGender(gender);
    setHeight(height);
    setWeight(weight);
    setPublisher(publisher);
    setInput('');
  }

  
  return (
    <div className="App">
    {
      name === "" ? 
      <Superhero input={input} setInput={setInput} FindHero={FindHero}/> 
      : status === 'success' ?
      <Output input={input} name={name} image={image}  gender={gender} height={height} weight={weight} setGender={setGender} publisher={publisher} setName={setName}/> :
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
