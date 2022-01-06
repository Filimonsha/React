import React from 'react';
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
    const LIST=[
        {
            id:generateIndex(),
            text:'Айтем 1',
            onClick:()=>{console.log("Вы нажали")},
            className: "first"
        },
        {
            id:generateIndex(),
            text:'Айтем 2',
            onClick:()=>{console.log("Вы нажали")},
            className: "second"
        }
    ]
    return(
        <Layout>
            <Header/>
            <Content>
                <CardList/>
                <Dropdown button = {  
                    <button>
                        pressME
                    </button>
                }>
                    <genericList.GenericList list={LIST} />
                </Dropdown>
            </Content>
        </Layout>
    );
}
