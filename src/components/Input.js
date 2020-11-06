import React from 'react';
import './input.css';
import { Input, Button} from 'antd';
import 'antd/dist/antd.css';

const Superhero = () => {
    return (
        <div className="inputbox">
            <div className="input">
                <h1>Search your SuperHero!</h1>
                <form>
                    <Input size="large" placeholder="Enter SuperHero Name Here... "  /> 
                    <Button size="large"  type="primary">Search</Button>
                </form>
            </div>  
        </div>
    )
}

export default Superhero
