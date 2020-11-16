import React from 'react'
import { Divider } from 'antd';
import Text from 'antd/lib/typography/Text';
import './Result.css';

const Hero = () => {
        return (
            <div className="main">  
                    <div className='details'>
                            <img src='' alt="character image" width='20%'/><br />
                                <div className="intro">
                                    <Text type="success">Full-Name : - &nbsp; &nbsp;</Text>{/*  {detail.name} */}<br />
                                    <Text type="success">gender : - </Text> &nbsp; &nbsp; {/* {detail.appearance.gender} */}<br />
                                    <Text type="success">Height : - </Text> &nbsp; &nbsp;{/* {detail.appearance.height[1]} */}<br />
                                    <Text type="success">Weight : - </Text> &nbsp; &nbsp;{/* {detail.appearance.weight[1]} */} <br/>
                                    <Text type="success">Publisher : - </Text> &nbsp; &nbsp;{/* {detail.biography.publisher} */} <br /><br />
                                    <h2><Text type="success">Description: -</Text></h2>
                        <p>I am  and my relations are and my powerstats are listed </p>
                        <ul>
                            <li>intelligence: - {/* {detail.powerstats.intelligence} */}</li>
                            <li>Strength: -{/*  {detail.powerstats.strength} */}</li>
                            <li>Speed: -{/* {detail.powerstats.speed} */}</li>
                            <li>Power: -{/* {detail.powerstats.power} */}</li>
                            <li>Durability: -{/* {detail.powerstats.durability} */}</li>
                            <li>Combat: -{/* {detail.powerstats.combat} */}</li>
                        </ul> 
                        
                        </div>
                    </div>
                <Divider /> 
               {/*  <Hero /> */}
            </div>
        )
    }
    

export default Hero
