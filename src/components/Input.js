import React from 'react';
import './input.css';
import 'antd/dist/antd.css';
import {FacebookFilled, InstagramFilled, LinkedinFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons'
import { Layout, Menu, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const Superhero = ({input,setInput, FindHero}) => {

    const handelChange = (event) => {
        setInput(event.target.value)
    }
    //console.log(input); 

    const handelClick =(event) =>{
        event.preventDefault();
        FindHero();
    }

    return (
        <>
            <Layout className='body'>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor: 'dark' }}>
                <Menu className='menu' theme="dark" mode="horizontal"  defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Characters List</Menu.Item>
                </Menu>
                </Header>
                
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}> 
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <div className="inputbox"> 
                        <div className='input'>
                            <h1>Search your SuperHero!</h1>     
                                <form>
                                    <Input size="large" placeholder="Enter SuperHero Name Here..." value={input} onChange={handelChange}  /> 
                                    <Button size="large"  type="primary" htmlType="submit"  onClick={handelClick} >Search</Button>
                                </form> 
                        </div>         
                    </div>
                    
                </div>
                </Content>

                <Footer style={{ textAlign: 'center' }} theme='dark'>
                    SuperHeros ©2020 Created by Dravid R. <br />
                    <div className="icon">
                        <a href='#'><FacebookFilled /></a> 
                        <a href='#'><InstagramFilled /></a> 
                        <a href='#'><LinkedinFilled /></a> 
                        <a href='#'><GithubFilled /></a>
                        <a href='#'><TwitterSquareFilled /></a> 
                    </div>
                    
                </Footer>
            </Layout>
            
        </>
    )
}

export default Superhero
