import React  from 'react';
import { Col } from 'react-bootstrap';
import CustomModal from './CustomModal'

const ContentItem = ({ Contents }) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Col sm={3} >
            <div class="pad15 my-3" data-testid="content-item-1">
                <img class="bd-placeholder-img card-img-top" width="100%" height="100%" src={Contents.imgUrl} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div class="card-body">
                    <p class="h5 card-title text-light mt-3">{Contents.title}</p>
                    <p class="card-title text-muted">{Contents.movie === 0 ? 'Seasons: ' + Contents.seasons.length : Contents.length + ' min'}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <p class="card-text">
                            <a class="btn btn-danger" name="id" onClick={() => setModalShow(true)}>Learn More</a>
                        </p>
                        <small class="text-muted">{Contents.Date}</small>
                    </div>
                </div>
            </div>
            <CustomModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={Contents}
            />
        </Col>

    );
}




export default ContentItem;
