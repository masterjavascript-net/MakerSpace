import React, { useEffect, useState } from 'react'
import { ScrollToTopComponent } from './scroll-to-top.styles';

import { FaRocket } from 'react-icons/fa';
import { GiCelebrationFire } from "react-icons/gi";

import { useWindowScroll } from "react-recipes";


const ScrollToTop = () => {

    const [fireClassName, setFireClassName] = useState('')
    const [rocketClassName, setRocketClassName] = useState('')
    const {y} = useWindowScroll();

    useEffect(()=> {
      if(y===0){
        setRocketClassName('')
        setFireClassName('')
      }
    }, [y])

    const rocketFired = () => {
      if(y>50){

        setFireClassName('fire-active')
        setRocketClassName('rocket-active')
        window.scrollTo(0,0)

      }
    }

  return (
    <ScrollToTopComponent onClick = {() => rocketFired()}>
          <FaRocket className={`scroll-rocket ${rocketClassName}`}/>
          <GiCelebrationFire className={`scroll-fire ${fireClassName}`}/>
    </ScrollToTopComponent>
  )
}

export default ScrollToTop