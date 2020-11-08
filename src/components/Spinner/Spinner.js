import React from 'react'
import "./Spinner.scss";

const Spinner = () => {
    return (
        <div class="loading">
        <p class="loaderText">Loadind...</p>
        <div class="loader">
        </div>
    </div>
    )
}

export default Spinner