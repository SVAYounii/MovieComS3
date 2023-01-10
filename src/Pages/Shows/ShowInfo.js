import React from 'react'
import { useParams } from 'react-router-dom'


export function ShowInfo() {
    const params = useParams();
    console.log(params);
    return (
        <React.StrictMode>
            <h2>Show info from  {params.ShowId }</h2>
        </React.StrictMode>
    );
}
export default ShowInfo;