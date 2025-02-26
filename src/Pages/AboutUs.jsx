import React from 'react'
import "../index.css"
import People from '../Components/AboutUsPage/People.jsx'
import MainPhoto from '../Components/AboutUsPage/MainPhoto.jsx'
import axios from 'axios'
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function AboutUs({isAdmin=false})
{
    const [response, setResponse] = useState(null);
    console.log(import.meta.env.VITE_API_LINK.concat("/cadfemapi/addPerson/"));
    useEffect(()=>{
        axios.get(import.meta.env.VITE_API_LINK.concat("/cadfemapi/addPerson/"))
        .then((serverResponse) => {
            //callback function?
            setResponse(serverResponse.data);
        })
    }, [])


    return (
      <React.StrictMode>
        {/*<MainPhoto></MainPhoto>*/}
        {response && <People isAdmin={isAdmin} peopleList={response}/>}
      </React.StrictMode>
    )
}

AboutUs.propTypes = {
  isAdmin: PropTypes.bool
};