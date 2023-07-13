
import '../../../app/globals.css'
import React from 'react'
import Image from 'next/image'
import LogoImage from '../../../assets/logo.png'
import DarthVader from '../../../assets/darthvader.png'
import Lightsaber from '../../../assets/lightsaber.gif'
import { Container, PreLoader, BannerWrapper, ImageTitleWrapper, Subtitle } from './style'

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
