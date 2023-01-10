import React, { Component } from 'react';
import SmallCarousel from '../../Components/SmallCarousel';
import { useEffect, useState } from "react";
import axios from 'axios';

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
                        <SmallCarousel Genre={childs}></SmallCarousel>
                    )
                })
            }
        </div>
    );

}


export default HomeBottom