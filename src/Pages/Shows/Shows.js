import React from 'react'
import Navbar from '../../Components/Navbar';
import ContentItem from '../../Components/ContentItem';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import axios from 'axios';
import { ConnectionString } from '../../Components/ConnectionString';

export function Shows() {
  const [responseData, setData] = useState(0);

  useEffect(() => {
    const getData = async () => {

      let config = {
        method: 'get',
        url: ConnectionString() +'/api/Contents/GetShows',
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



export default Shows;