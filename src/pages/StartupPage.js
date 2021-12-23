import React from 'react'
import styled from 'styled-components'
import BACKGROUND_IMAGE from '../assets/bg.jpg'
function StartupPage() {
    return (
        <FrontPage>
            <Background>
                <img src={BACKGROUND_IMAGE} alt='loading'/>
            </Background>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
/* background-image: url('https://wallpaperaccess.com/full/395434.jpg'); */
width: 100vw;
height: 600px;
background: cover;
background-position: center;
background-repeat: no-repeat;
`;
const Background = styled.div`
img{
    width: 100vw;
    height: 600px;
    background: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`;