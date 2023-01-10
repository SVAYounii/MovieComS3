import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from "react";
import axios from 'axios';

function CustomModal(props) {
    const thumb = true;
    if (props.data.filePath.includes("watch?v=")) {
        props.data.filePath = props.data.filePath.replace("watch?v=", "embed/");
    }

    const SwitchThumbnail = () => {
        const player = document.getElementById('iframePlayer').style.display;
        if (player === 'none') {
            document.getElementById('iframePlayer').style.display = 'inline';
            document.getElementById('thumbnailContent').style.display = 'none';
        }
        else {
            document.getElementById('iframePlayer').style.display = 'none';
            document.getElementById('thumbnailContent').style.display = 'inline';
        }
    };

    const [responseData, setData] = useState(0);

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

    return (
        <Modal
            {...props}
            fullscreen={"fullscreen"}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe id='iframePlayer' src={props.data.filePath} width={'100%'} height={'430.875'} frameborder="0" allowfullscreen className={'rounded'} style={{ display: 'none' }} />
                <img id='thumbnailContent' className='rounded' src={props.data.imgUrl} width={'100%'} height={'100%'} style={{ display: 'inline' }}></img>

                <p className='h3 mt-1'>{props.data.title}</p>
                <p className=''>{new Date(props.data.date).getFullYear()} : {props.data.movie === 0 ? props.data.seasons.length + ' Seasons' : props.data.length + ' min'} </p>
                <p className=''>{props.data.description}</p>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="danger" className='me-2 rounded' onClick={SwitchThumbnail}>Watch</Button>
                    <Button variant="primary" className='mx-2 rounded' onClick={getData}>Add to Favourite</Button>
                </ButtonGroup>

            </Modal.Body>
        </Modal>
    );
}
export default CustomModal;

