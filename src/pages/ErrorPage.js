import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/'>
          <button className='btn'>Back Home</button>
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    text-transform: none;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
