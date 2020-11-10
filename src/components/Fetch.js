import axios from 'axios'
import React, { useState, useEffect} from 'react'
import './Fetch.css'
import {Card } from 'antd';
const { Meta } = Card;

const Fetch = () => {
    const [hero , setHero] = useState([]);
    const [img , setImage] = useState([]);


    const submit =() =>{
        alert("clicked super hero");
    }

    useEffect(() =>{
        axios.get('https://www.superheroapi.com/api.php/2892825827616713/search/a')
            .then(res => {
                console.log(res)
                setHero(res.data.results);
                setImage(res.data.results);
            })
            .catch(err =>{
                console.log(err)
                
            })
    }, [])
    return (
        <div>
            <div className='card'>
            {hero.map(heros => (
                <Card
                    key={heros.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={heros.image.url} height='400'onClick={submit}/>}
                    >
                    <Meta title={heros.name}  />
                    
                </Card>   
            ))} 
            
            </div>
            
            
            
        </div>
    )
}

export default Fetch;
