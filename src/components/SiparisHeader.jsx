import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


const StyledHeader = styled.header`
    background-color:  #CE2829;
    height:  20vh;
    background-image: url("images/iteration-1-images/logo.svg");
    background-repeat: no-repeat;
    background-position: center
    `

const StyledDiv= styled.div`
display:flex;
flex-direction: row;
justify-content: center;
height: 20vh;
align-items: flex-end;
color: white
`

const StyledButton1= styled.button`
background-color: #CE2829;
border: 1px solid #CE2829;
color: white;
font-family: "Barlow";
font-weight: 400
`

const StyledButton2= styled.button`
background-color: #CE2829;
border: 1px solid #CE2829;
color: white;
font-family: "Barlow";
font-weight: 700
`

export default function SiparisHeader() {

    return (
        <StyledHeader>
            <StyledDiv>
               <Link to="/"><StyledButton1>Ana Sayfa</StyledButton1></Link>
                -
               <Link><StyledButton2>Sipariş Oluştur</StyledButton2></Link>
            </StyledDiv>
        </StyledHeader>
    )
}