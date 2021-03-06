import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WEBSITE_LOGO from '../assets/logo.png'
import {  Button, Icon } from 'rsuite';

function Navbar() {
    const NavMenu = [
        {
           text: "Home",
           icon: "home",                 
        },
        {
            text: "About",
            icon:"adjust"
        },
        {
            text: "Contact",
            icon:"address-book"
        },
        {
            text: "Support",
            icon:"user"
        }
    ]
    return (
        <Nav>
            <div className='Nav_Logo'>
            <Link>
            <img src={ WEBSITE_LOGO } alt='loading'/> <span>ROOZ</span>
            </Link>
        </div>
        <div className='Nav_Navigation'> 
{ NavMenu.map((Nav)=>{
    return(
        <div className='Nav_Menu'>
            <Icon id="icon" icon={Nav?Nav.icon:null}/> <span> {Nav.text} </span>
            </div>
    )
})}
 <div className='Nav_btn'>
                       <Button color="orange">SignIn</Button>
                       <Button color='orange'>Register</Button>
                       </div>
        </div>

        </Nav>
        
    )
}

export default Navbar

const Nav = styled.div`
display: flex;
flex-direction: row;
text-align: center;
/* border: 2px solid red;*/
color: white;
justify-content: space-between;
align-items: center;
padding: 15px 29px;
    .Nav_Logo{
        cursor: pointer;
            a{
                text-decoration: none;
            }
            img{
                width: 60px;
                height: 60px;
            }
            span{
                font-size: 40px;
                position: relative;
                top: 15px;
                right: 5px;
                transition: 0.3s all ease-in-out;
                color: white;
            }
    &:hover span{
        color: #c4990c;
       
    }
}
.Nav_Navigation{
    display: flex;
    justify-content: space-around;
    padding: 10px 10px;
        .Nav_Menu{
            display: block;
            text-align: center;
            cursor: pointer;
            padding: 6px 10px;
            margin-right: 8px ;
            transition: 0.3s all ease-in-out;
                &:hover{
                color: #c4990c;
                transform: scale(1.1);
                }
        #icon{
            font-size: 16px;
        }
        span{
            font-size:18px;
            font-weight: 600;
           
        }
    }
    .Nav_btn{
        Button{
            margin-right: 5px;
            height: 32px;
            line-height: 0;
            background-color: transparent;
            border: 2px solid #c4990c;;
            color: #c4990c;
                &:hover{
                    color: white;
                    background-color: #c4990c;
                }
        }
    }
}
`;
