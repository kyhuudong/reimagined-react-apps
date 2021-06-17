import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign Up for new section</HeroP>
        <HeroBtnWrapper>
          <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true'
            dark='true'
          >Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
