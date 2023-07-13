import '../../../app/globals.css'
import React from 'react'
import { NavbarWrapper, NavLink, SocialDiv, SocialLink } from './style'
import VaderIcon from '../../../assets/vaderhemlet.png'
import Image from 'next/image';
import Linkedin from '../../../assets/linkedin.svg'
import Github from '../../../assets/github.svg'

export default function Navbar() {
    return (
        <NavbarWrapper>
            <Image 
                src={VaderIcon}
                width={60}
                alt='icon'
            />
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>MADE BY RIDOLFI</NavLink>
            <SocialDiv>
                <SocialLink href='https://www.linkedin.com/in/carlos-ridolfi/' target='_blank'>
                    <Image
                        src={Linkedin}
                        alt='linkedin'
                        width={30}
                    />
                </SocialLink>
                <SocialLink href='https://github.com/CarlosRidolfi' target='_blank'>
                    <Image
                        src={Github}
                        alt='github'
                        width={30}
                    />
                </SocialLink>
            </SocialDiv>
        </NavbarWrapper>
    )
}
