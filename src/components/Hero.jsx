import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import react from '../images/logo.png'
import python from '../images/python.png'
import angular from '../images/Angular.png'
import ionic from '../images/Ionic.png'
import flask from '../images/flask.png'
import typescript from '../images/typescript.png'
import nodejs from '../images/node.js.png'
import { Light, Dark } from '../config'
import { useErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-scroll'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SocialLinks from './SocialLinks'
import { ReactTyped } from 'react-typed'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

// #region styled-components
const spin = keyframes`
  0% {
    transform: translateX(0px);
    opacity: 0;
  }
  50%{
    transform: translateX(100px);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
`

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === 'light'
        ? 'linear-gradient(135deg, var(--bs-primary), var(--bs-light))'
        : 'linear-gradient(135deg, var(--bs-primary), var(--bs-dark))'};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.2)'};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      min-width: 200px;
      width: 50%;
      max-width: 300px;
     }
    /*.hero-img1 {
      opacity: 0;
      animation: ${spin} infinite 5s ease ;
    }
    .hero-img2 {
      opacity: 0;
      animation: ${spin} infinite 6s ease;
      animation-delay: 3s;
    }
    .hero-img3 {
      opacity: 0;
      animation: ${spin} infinite 7s ease;
      animation-delay: 1.5s;
    }*/
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === 'light'
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === 'light'
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`

const TypedStyles = styled.span`
  span {
    margin: 18px 0px;
    font-weight: 700;
    font-size: 1.5em;
  }
`
const propTypes = {
  name: PropTypes.string
}

const images = [
  { url: python, caption: 'Python' },
  { url: flask, caption: 'Flask' },
  { url: ionic, caption: 'Ionic' },
  { url: angular, caption: 'Angular' },
  { url: typescript, caption: 'Typescript' },
  { url: react, caption: 'React' },
  { url: nodejs, caption: 'node.js' }
]

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary()
  return (
    <StyledHero>
      <Container>
        <Row className='align-items-center text-center'>
          <Col md={6}>
            <h1 className='mb-3 display-3 title'>
              {name === null ? 'null' : name}
            </h1>
            <TypedStyles>
              <ReactTyped
                strings={[
                  'Fullstack Developer',
                  'Software Engineer',
                ]}
                typeSpeed={100}
                loop
              />
            </TypedStyles>
            <div className='mt-3 d-flex align-items-center justify-content-center'>
              <SocialLinks />
            </div>
          </Col>
          <Col md={6} className='d-none d-md-block'>
            <Fade
              duration={2000}
              defaultIndex={0}
              arrows={false}
              pauseOnHover={false}
              easing='ease'
              canSwipe={false}
              cssClass='fade-class'
            > {/* w-75 mx-auto */}
              {images.map((image) => (
                <img
                  key={image.caption}
                  src={image.url}
                  alt={image.caption}
                  className='hero-img'
                />
              ))}
            </Fade>
          </Col>
        </Row>
        <Row className='align-items-end down-container'>
          <Col className='m-4 text-center'>
            <Link to='About' className='link-icons'>
              <Icon icon='fa6-solid:circle-chevron-down' />
            </Link>
          </Col>
        </Row>
        <Button
          className='d-none'
          onClick={() =>
            showBoundary({
              name: 'Error',
              message: 'Simulated error message'
            })}
        >
          Simulate Error Boundary
        </Button>
      </Container>
    </StyledHero>
  )
}

Hero.propTypes = propTypes
// #endregion

export default Hero
