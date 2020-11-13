import { Divider,Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import './Result.css';

const Output = ({details, setStatus}) => {
    return (
        <div className="main">
                <h1>Your SuperHero </h1><Button type="primary" onClick={() =>{setStatus("")}}>
                    Back
                </Button> <br />
                {details.map (detail => {
                    return(
                        <div key={detail.id}>
                        <div className='details'>
                        <img src={detail.image.url} alt="character image" width='20%'/><br />
                            <div className="intro">
                                <Text type="success">Full-Name : &nbsp; &nbsp;</Text> {detail.name}<br />
                                <Text type="success">gender : </Text> &nbsp; &nbsp; {detail.appearance.gender}<br />
                                <Text type="success">Height : </Text> &nbsp; &nbsp;{detail.appearance.height[1]}<br />
                                <Text type="success">Weight : </Text> &nbsp; &nbsp;{detail.appearance.weight[1]} <br/>
                                <Text type="success">Publisher : </Text> &nbsp; &nbsp;{detail.biography.publisher} <br /><br />
                                <h2><Text type="success">Description:-</Text></h2>
                    <p>I am {detail.name} and my relations are {detail.connections.relatives} and my powerstats are listed 
                    <ul>
                        <li>intelligence: {detail.powerstats.intelligence}</li>
                        <li>Strength: {detail.powerstats.strength}</li>
                        <li>Speed: {detail.powerstats.speed}</li>
                        <li>Power: {detail.powerstats.power}</li>
                        <li>Durability: {detail.powerstats.durability}</li>
                        <li>Combat: {detail.powerstats.combat}</li>
                    </ul> 
                    </p>
                    </div>
                        </div>
                        <Divider /> 
                        </div>
                    )
                })}
             
                <Button type="primary" onClick={() =>{setStatus("")}}>
                    Back
                </Button>
    
        </div>
    )
}

export default Output;