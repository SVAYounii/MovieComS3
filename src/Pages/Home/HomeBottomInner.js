import React from 'react';
import SmallCarousel from '../../Components/SmallCarousel';
import { useEffect, useState } from "react";
import axios from 'axios';
import { ConnectionString } from '../../Components/ConnectionString';

export function HomeBottomInner(Genre) {
    const [finaldata, setData] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const id = Genre.Genre.id
            let config = {
                method: 'get',
                url: ConnectionString() +'/api/Contents/GetContentbyGenre?genreId=' + id,
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
    }, [Genre.Genre.id]);

    return (
        <div>
            {finaldata !== 0 &&

                <SmallCarousel Data={finaldata} Genre={Genre.Genre.name}></SmallCarousel>
            }
        </div>
    );

}