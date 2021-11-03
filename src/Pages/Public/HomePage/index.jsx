import React,{ useEffect } from 'react'
import BannerComponent from './Components/BannerComponent'

const HomePage = () => {
    useEffect(() => {
        fetch('https://devstar-mockapi.herokuapp.com/nguyen-profile')
        .then(data => data.json())
        .then(result => console.log(result))
    },[])
    return (
        <div>
            <BannerComponent />
        </div>
    )
}

export default HomePage
