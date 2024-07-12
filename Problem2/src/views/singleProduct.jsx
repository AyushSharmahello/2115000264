import {React, useState, useEffect} from 'react';
import baseUrl from "../operation/session"
import axios from 'axios';
import Navbar from '../components/Navbar';

function singleProduct() {
    return(
        <>
            <div>
                <Navbar/>
            </div>
        </>
    )

}

export default singleProduct;