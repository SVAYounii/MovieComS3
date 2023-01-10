import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentItem from './ContentItem';
import { useEffect, useState } from "react";
import axios from 'axios';


export function SmallCarousel(Genre) {


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
        <>
            {finaldata !== 0 &&

                <div class="row" style={{ marginLeft: '1%', marginRight: '1%' }} >
                    <h3 class="mt-5 " style={{ color: 'white', fontWeight: 'bold', paddingLeft: '3.5%' }} >{Genre.Genre.name}</h3>
                    <div class="MultiCarousel" style={{ paddingLeft: '3%', paddingRight: '3%' }} data-items="1,2,3,4" data-slide="4" id="MultiCarousel" data-interval="1000">
                        <div class="MultiCarousel-inner">
                            <Row>
                                {finaldata.map((data, index) => {
                                    if (index >= 12) {
                                        return;
                                    }
                                    return (data.status &&
                                        <ContentItem Contents={data}></ContentItem>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default SmallCarousel
