import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { HomeBottomInner } from './HomeBottomInner';

export function HomeBottom() {

    const [data, setData] = useState(0);

    useEffect(() => {
        const getData = async () => {

            let config = {
                method: 'get',
                url: 'https://localhost:7094/api/Genres',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken
                }
            };

            axios(config)
                .then((response) => {
                    setData(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getData();
    }, []);

    

    return (
        <div>
            {data !== 0 &&

                data.map((childs, index) => {
                    return (
                        <HomeBottomInner Genre={childs}></HomeBottomInner>
                    )
                })
            }
        </div>
    );

}


export default HomeBottom