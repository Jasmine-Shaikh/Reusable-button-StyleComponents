import styled from "styled-components";
import React from "react";;



const Button = styled.button`

font-family: Arial, sans-serif;
margin: 20px;
cursor: pointer;
width: 150px;
height: 35px;
border-radius: 3px;
font-weight: bold;
background-color: ${(props) => (props.primary? "#2490FE" : "white")};
color:${(props) => (props.primary? "white" : props.link? "#2490FE" : "black")};
border:${(props)=>(props.primary? "1px solid #2490FE" : props.dashed? "1px dashed grey" :props.link || props.text? "none": "1px solid lightgrey")}
`

export {Button};