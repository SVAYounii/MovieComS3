import React from 'react'
import Navbar from '../../Components/Navbar';
import { useEffect, useState } from "react";
import axios from 'axios';
import ContentItem from '../../Components/ContentItem';
import Row from 'react-bootstrap/Row';

export function Favourite() {
  const [responseData, setData] = useState(0);

  useEffect(() => {
    const getData = async () => {

      let config = {
        method: 'get',
        url: 'https://localhost:7094/api/Contents/GetShows',
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
      <Navbar />
      {responseData !== 0 &&

        <div className='m-3'>
          <Row>
            {responseData.map((data, index) => {
              return (data.status &&
                <ContentItem Contents={data}></ContentItem>
              )
            })}
          </Row>
        </div>
      }
    </div>
  );
}



export default Favourite;