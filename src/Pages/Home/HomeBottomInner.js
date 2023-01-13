import React from 'react';
import SmallCarousel from '../../Components/SmallCarousel';
import { useEffect, useState } from "react";
import axios from 'axios';

export function HomeBottomInner(Genre) {
    const [finaldata, setData] = useState(0);

    useEffect(() => {
        const getData = async () => {

            let config = {
                method: 'get',
                url: 'https://localhost:7094/api/Contents/GetContentbyGenre?genreId=' + Genre.Genre.id,
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
            {finaldata !== 0 &&

                <SmallCarousel Data={finaldata} Genre={Genre.Genre.name}></SmallCarousel>
            }
        </div>
    );

}