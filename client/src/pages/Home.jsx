import React from 'react';
import Header from '../components/Header';
import { PanelMenu } from 'primereact/panelmenu';

const Home = () => {
    const items = [
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New(使用不可)',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete(使用不可)',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    url:'/search'
                }
            ]
        }
    ];

    return (
        <React.Fragment>
            <Header />
            <div>
                <div className="card">
                    <PanelMenu model={items} style={{ width: '22rem' }}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;