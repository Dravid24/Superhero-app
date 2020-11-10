import { Divider,Button,Result } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import './Result.css';

const Output = ({name, image, gender, height, weight,publisher, setName}) => {
    return (
        <div className="main">
                <h1>Your SuperHero </h1><br />
                <div className='details'>
                <img src={image} alt="character image" width='25%'/><br />
                    <div className="intro">
                        <Text type="success">Full-Name : &nbsp; &nbsp;</Text> {name} <br />
                        <Text type="success">Publisher : </Text> &nbsp; &nbsp;{publisher} <br />
                        <Text type="success">gender : </Text> &nbsp; &nbsp; {gender}<br />
                        <Text type="success">Height : </Text> &nbsp; &nbsp;{height}<br />
                        <Text type="success">Weight : </Text> &nbsp; &nbsp;{weight} <br/><br />
                        <h2><Text type="success">Description:-</Text></h2>
                        <p></p>
                    </div>
                </div>
                <Divider />
                
                <Button type="primary" onClick={() =>{setName("")}}>
                    Back
                </Button>
    
        </div>
    )
}

export default Output;