import React from 'react';
import Row from 'react-bootstrap/Row';
import ContentItem from './ContentItem';


export function SmallCarousel({ Data, Genre }) {
    const tt = JSON.stringify(Data)
    console.log("dd:" + tt)
    return (
        <div data-testid="small-carousel-1">
            <div class="row" style={{ marginLeft: '1%', marginRight: '1%' }} >
                <h3 class="mt-5 " style={{ color: 'white', fontWeight: 'bold', paddingLeft: '3.5%' }} >{Genre}</h3>
                <div class="MultiCarousel" style={{ paddingLeft: '3%', paddingRight: '3%' }} data-items="1,2,3,4" data-slide="4" id="MultiCarousel" data-interval="1000">
                    <div class="MultiCarousel-inner">
                        <Row>
                            {Data.map((data, index) => {
                                if (index < 12) {
                                    return (data.status &&
                                        <ContentItem Contents={data}></ContentItem>
                                    );
                                }
                                return null;
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallCarousel
