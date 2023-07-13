
import '../../../app/globals.css'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoImage from '../../../assets/logo.webp'
import DarthVader from '../../../assets/darthvader.png'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; /* Adjust as needed */
    overflow: hidden;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
    }
`

const BannerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
    overflow: hidden;
    padding: 10px;

    #vader {
        opacity: 0;
        animation: fade-in 2s ease-in-out forwards;

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
    align-items: center;
    flex-direction: column;
    row-gap: -10px;
    opacity: 0;
    animation: separate 1s ease-in-out forwards;

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
    width: 580px;
    color: #FFE81F;
`

export default function Banner() {
    return (
        <Container>
            <video src={"/darthvideo.mp4"} autoPlay muted loop />
            <BannerWrapper>
                <ImageTitleWrapper>
                    <Image 
                        src={LogoImage}
                        width={700}
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
