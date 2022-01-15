import React, { useEffect, useState } from 'react';
import { ids } from 'webpack';
import { CardList } from './CardList';
import { Content } from './Content';
import { Dropdown } from './Content/Dropdown';
import * as genericList from './Content/GenericList';
import { Header } from './Header';
import { Layout } from './Layout';
import './main.global.css'; 
import { generateIndex } from './utils/generateIndex';



export function App(){
    
    const [token,setToken] = useState('');
    useEffect(()=>{
        console.log(window.location.href)
        const url = new URL(window.location.href);
        const args= new URLSearchParams(url.search)
        // console.log(url.hash.split('&'));
        // console.log(url.hash.split("&")[0].split('='));
        setToken(url.hash.split("&")[0].split("=")[1]);
    },[])
    console.log(token)
    return(
        <Layout>
            <Header token={token} />
            <Content>
                <CardList/>
                <Dropdown button = {  
                    <button>
                        pressME
                    </button>
                }>
                    {/* <genericList.GenericList list={LIST} /> */}
                </Dropdown>
            </Content>
        </Layout>
    );
}
