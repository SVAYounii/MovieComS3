import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const CustomModal = (props) => {
    if (props.data.filePath) {
        if (props.data.filePath.includes("watch?v=")) {
            props.data.filePath = props.data.filePath.replace("watch?v=", "embed/");
        }
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



    return (
        <div data-testid="modal-1">
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
                        <Button variant="primary" className='mx-2 rounded'>Add to Favourite</Button>
                    </ButtonGroup>

                </Modal.Body>
            </Modal>
        </div>
    );
}
export default CustomModal;

