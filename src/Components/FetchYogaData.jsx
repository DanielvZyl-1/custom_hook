import React from "react";
import useFetch from './UseFetch';

const FetchYogaData = () => {
    const [data]=useFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data)
    return (
        <>
        <ul className="list_data_main">
            <h1>Yoga</h1>
            {data && data.map((e)=>(
                <li className="list_data">
                <h1>{e.name}</h1>
                <p>Benefits: {e.benefits}</p>
                </li>
            ))}
        </ul>
        </>
    );
};
export default FetchYogaData