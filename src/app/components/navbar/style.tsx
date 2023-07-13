import styled from "styled-components";

export const NavbarWrapper = styled.div`
    font-family: 'Mukta', sans-serif;
    position: relative;
    height: 0px;
    display: flex;
    align-items: center;
    column-gap: 80px;
    width: 100%;
    padding: 35px 0px 0px 0px;
    max-width: 1520px;
    margin: 0 auto;
    z-index: 2;
    opacity: 0;
    transition: all ease .5s;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #f2f2f2;
    cursor: pointer;
    opacity: .5;
    transition: all ease 1s;

    &:hover {
        opacity: 1;
    }
`

export const SocialDiv = styled.div`
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`

export const SocialLink = styled.a`
    text-decoration: none;
`