import React, { useState } from 'react';
import Header from '../components/Header';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable'; 

const $ = window.$;

const SearchUser = () => {
    const [userNumber, setUserNumber] = useState("");
    const [users, setUsers] = useState([]);
    const columns = [
        {field: 'lastName', header: 'lastName'},
        {field: 'firstName', header: 'firstName'},
        {field: 'gender', header: 'gender'}
    ];

    const updateUserNumber = (e) => {
        setUserNumber(e.target.value);
    };

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    const search = (e) => {
        e.preventDefault();

        const body = { userNumber: userNumber };

        $.ajax({
            url: "/api/search",
            dataType: 'json',
            type: 'POST',
            data: body
        }).then(
            function(data) {
                setUsers(data.content);
            }
        );
    }

    return (
        <React.Fragment>
            <Header />
            <h1>ユーザー情報検索画面</h1>
            <form onSubmit={search}>
                <div>
                    <label htmlFor="userNumber" className="p-col-fixed" style={{width: '100px'}}>お客様番号</label>
                    <div className="p-col">
                        <InputText id="userNumber" value={userNumber} onChange={updateUserNumber} />
                    </div>
                </div>
                <div className="button-demo">
                    <span className="p-buttonset">
                        <Button label="検索" icon="pi pi-search" />
                        <Button label="条件クリア" icon="pi pi-times" />
                    </span>
                </div>
                <div className="card">
                    <DataTable value={users} responsiveLayout="scroll">
                        {dynamicColumns}
                    </DataTable>
                </div>
            </form>
        </React.Fragment>
    );
}

export default SearchUser;