import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import httpClient from '../service/httpClient';


const Searcher = () => {
    const [search, setSearch] = React.useState('');
    const [results, setResults] = React.useState([]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        fetch(`${httpClient.urlBase!}/search?textSearch=${search}`, {
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        }).then((response: any) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then((data: any) => {
            console.log(data);
            setResults(data);
        }).catch(error => console.log(error));

    }
    const changeSearch = (event: any) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit} method="get">
                <input onChange={changeSearch} type="text" placeholder='Search...' />
            </form>
            {results.length > 0 &&
                (
                    <Redirect to={{
                        pathname: '/results',
                        state: { results: results }
                    }} />
                )

            }
        </>
    );
}

export default Searcher;