import BigCarousel from '../../Components/BigCarousel';
import { useEffect, useState } from "react";
import axios from 'axios';
import { ConnectionString } from '../../Components/ConnectionString';

export function HomeTop() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const getData = async () => {

      let config = {
        method: 'get',
        url: ConnectionString() +'/api/Contents/10',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).accessToken
        }
      };

      axios(config)
        .then((response) => {
          setData(response.data)
          console.log("ye",response.data);

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

        <BigCarousel Contents={data}></BigCarousel>

      }
    </div>
  )
}

export default HomeTop;