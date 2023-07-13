
import '../../../app/globals.css'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoImage from '../../../assets/logo.png'
import DarthVader from '../../../assets/darthvader.png'
import Lightsaber from '../../../assets/lightsaber.gif'

const PreLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    animation: fadeOut 2s forwards;
    z-index: 2;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        bottom: 0;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

const Container = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        object-fit: cover;
        opacity: 0.3;
    }
`

const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    z-index: 9;
    padding: 10px;

    #vader {
        opacity: 0;
        animation: fade-in 4s ease-in-out forwards;
        pointer-events: none;
        height: 1400px;

        @media screen and (max-width: 1440px){
            width: 700px;
            height: 1200px;
        }

        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`

const ImageTitleWrapper = styled.div`
    display: flex;
    margin-top: 250px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    animation: separate 3s ease-in-out forwards;
    pointer-events: none;
    max-width: 700px;
    row-gap: 30px;

    img {
        width: 100%;
        height: auto;
    }

    @keyframes separate {
        0% {
            opacity: 0;
            transform: translateX(-200px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`

const Subtitle = styled.h2`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 24px;
    color: #FFE81F;
    margin-left: 10px;

    @media screen and (max-width: 1440px){
        font-size: 20px;
    }
`

export default function Banner() {
    const [preLoader, setPreLoader] = React.useState('flex')

    setTimeout(() => {
        setPreLoader('none')
    }, 3000)

    return (
        <Container>
            <PreLoader style={{ display: preLoader }}>
                <Image 
                    src={Lightsaber}
                    width={900}
                    alt='preloader'
                />
            </PreLoader>
            <video src={"/darthvideo.mp4"} autoPlay muted loop />
            <BannerWrapper>
                <ImageTitleWrapper>
                    <Image 
                        src={LogoImage}
                        alt='logo'
                    />
                    <Subtitle>Darth Vader, born as Anakin Skywalker, is a central character in the Star Wars saga. Initially a heroic Jedi Knight, Anakin succumbs to the dark side of the Force and becomes the iconic Sith Lord known as Darth Vader.</Subtitle>
                </ImageTitleWrapper>
                <Image 
                    src={DarthVader}
                    width={800}
                    alt='darthvader'
                    id='vader'
                />
            </BannerWrapper>
        </Container>
    )
}
