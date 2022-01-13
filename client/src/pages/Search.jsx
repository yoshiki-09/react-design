import React, { useState } from 'react';
import Header from '../components/Header';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const $ = window.$;

const Search = () => {
    const [userNumber, setUserNumber] = useState("");

    const updateUserNumber = (e) => {
        setUserNumber(e.target.value);
    };

    const search = (e) => {
        e.preventDefault();

        const body = { userNumber: userNumber };

        $.ajax({
            url: "/api/search",
            dataType: 'json',
            type: 'POST',
            data: body
        })
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
                    <Button label="Search" icon="pi pi-search" />
                </div>
            </form>
        </React.Fragment>
    );
}

export default Search;