import axios from 'axios'
import React, { useState, useEffect} from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from './Pagination';
import './Fetch.css'
//import { Button, Result } from 'antd';
import {Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;



const Fetch = (props) => {
    const [hero , setHero] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroPerPage, setHeroPerPage] = useState(12);

  /*  const submit= () =>{
       props.history.push('/hero/2');
   } */

    useEffect(() =>{
        axios.get('https://www.superheroapi.com/api.php/2892825827616713/search/a')
            .then(res => {
                //console.log(res)
                setHero(res.data.results);
                
            })
            .catch(err =>{
                console.log(err)
                
            })
    }, [])


    //Getting Heros
    const indexOfLastPost = currentPage * heroPerPage;
    const indexOfFirstPost = indexOfLastPost - heroPerPage;
    const currentPosts = hero.slice(indexOfFirstPost , indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div>
            <div className='card'>
            {currentPosts.map(heros => (
                <Card
                    key={heros.id}
                    hoverable
                    style={{ width: 240 , marginBottom: '20px' }}
                    cover={<img alt={heros.name} src={heros.image.url} height='300' />}
                    >
                            <div className='title'>
                            <Meta title={heros.name}  />
                            <div className='publish'>
                                Publisher:- <Meta title={heros.biography.publisher} ></Meta>
                            </div>
                            <Link to={heros.id} className='link'>Learn More</Link>
                        </div>              
                </Card>   
            ))} 
             </div>
           
           <Pages heroPerPage={heroPerPage} totalPosts={hero.length} paginate={paginate}/>
        
           
                        
        </div>
    )
}

export default Fetch;
