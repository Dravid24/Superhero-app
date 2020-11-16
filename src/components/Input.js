import React from 'react';
import './input.css';
import 'antd/dist/antd.css';
import Fetch from './Fetch';


import {FacebookFilled, InstagramFilled, LinkedinFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons'
import { Layout, Menu, Input, Button, Carousel,Card } from 'antd';
const { Meta } = Card;
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
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor: 'dark' }} breakpoint="lg" collapsedWidth="0">
                <div className="logo" ><img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/superman-44-834928.png' alt='logo' width='40%' height='65'/></div>
                <Menu className='menu' theme="dark" mode="horizontal"  defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >Home</Menu.Item>
                    <Menu.Item key="2" href='#character' >Characters List</Menu.Item>    
                </Menu>
                </Header>
                
                <Content className="site-layout" style={{ padding: '0 10px', marginTop: 64 }}> 
                <div className="site-layout-background" /* style={{ padding: 10 }} */>
                {/* ===========================Carousel============================= */}
                    <div className='carousel'>
                        <Carousel autoplay>
                            <div>
                            <img src='https://images4.alphacoders.com/844/thumb-1920-844967.jpg' alt='spiderman' width="100%" height="400"  /> 
                            </div>
                            <div>
                            <img src='https://4.bp.blogspot.com/-q0qBWEzC_h4/XJEMRniTyFI/AAAAAAAAA4s/OrCgpTcYHKk2IHJjVlHBHiot_PFclkH4ACKgBGAs/w4096-h2304-c/superman-uhdpaper.com-4K-106.jpg' alt='superman' width="100%" height="400"  />
                            </div>
                            <div>
                            <img src='https://cdn.wallpapersafari.com/51/29/vZmCDV.jpg' alt='wonder_woman' width="100%" height="400" />
                            </div>
                        </Carousel>
                    </div>
                    {/* ==================================Search=================================== */}
                    <div className="inputbox"> 
                        <div className='input'>
                            <h1>Search your SuperHero!</h1>  
                               
                                <form>
                                    <Input size="large" placeholder="Enter SuperHero Name Here..." value={input} onChange={handelChange}  /> 
                                    <Button size="large"  type="primary" htmlType="submit"  onClick={handelClick} >Search</Button>
                                </form> 
                        </div>         
                    </div>
                    {/* ===============================Lists================================== */}
                    <div id="character">
                        <h1><u>Some SuperHero characters</u></h1>
                        <Fetch /> 
                    </div>
                   
                </div>
                </Content>
                
                    {/* =====================================Footer============================== */}
                <Footer className='footer'>
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
