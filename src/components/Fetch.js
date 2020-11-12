import axios from 'axios'
import React, { useState, useEffect} from 'react'
import './Fetch.css'
import { Pagination } from 'antd';
import {Card } from 'antd';
const { Meta } = Card;

const Fetch = () => {
    const [hero , setHero] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroPerPage, setHeroPerPage] = useState(12);


    const submit =() =>{
        
        alert("clicked super hero ");
    }

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
    
    return (
        <div>
            <div className='card'>
            {currentPosts.map(heros => (
                <Card
                    key={heros.id}
                    hoverable
                    style={{ width: 240 , marginBottom: '20px' }}
                    cover={<img alt={heros.name} src={heros.image.url} height='300' onClick={submit}/>}
                    >
                        <div className='title'>
                            <Meta title={heros.name}  />
                            <div className='publish'>
                                Publisher:- <Meta title={heros.biography.publisher} ></Meta>
                            </div>
                           
                        </div>              
                </Card>   
            ))} 
             </div>
            <div className='pagination'>
                <Pagination defaultCurrent={1} total={78} />
            </div>
            
           
                        
        </div>
    )
}

export default Fetch;
