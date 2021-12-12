import React from 'react';
import { CardList } from './CardList';
import { Content } from './Content';
import { Header } from './Header';
import { Layout } from './Layout';
import './main.global.css'; 
export function App(){
    return(
        <Layout>
            <Header/>
            <Content>
                <CardList/>
            </Content>
        </Layout>
    );
}
