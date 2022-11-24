import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import "./Nav.css";
import { AiFillHome, AiFillInfoCircle, AiFillProject, AiFillContacts } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/#home"><AiFillHome/> Home</a>
          <a onClick={handleClick} href="/#about"><AiFillInfoCircle/> About</a>
          <a onClick={handleClick} href="/#skills"><GiSkills/> Skills</a>
          <a onClick={handleClick} href="/#project"><AiFillProject/> Projects</a>
          <a onClick={handleClick} href="/#contact"><AiFillContacts/> Contact</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: var(--primary-color);
  padding: 1rem;
  a{
    font-size: 2rem;
    text-decoration: none;
    margin-right: 2rem;
  }
  a:hover{
    color: #fff;    
    border-bottom: 3px solid #fff;   
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      display: block;
    }
    a:hover{
      color: #fff;    
      border-bottom: 1px solid #fff;   
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,63,176,1) 35%, rgba(0,212,255,1) 100%);;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 380%;
  }
`