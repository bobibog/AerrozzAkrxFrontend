import React from 'react'

import Map from '../../components/map/map'
import MainSidebar from '../../layouts/main-sidebar/main-sidebar'

import './main.scss'
import { HomePageContainer } from '../../layouts/styles/homepage.styles'

function Main() {
    return (
        <HomePageContainer>
            <h1>Main Page</h1>
            <Map />
            <MainSidebar />
        </HomePageContainer>
    )
}

export default Main
