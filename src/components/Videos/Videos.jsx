import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'

const Videos = () => {
  const { marginTopToOffset, marginLeftToOffset } = useGlobalContext()
  
  return (
    <VideoContainer
      style={{
        marginTop: marginTopToOffset,
        marginLeft: marginLeftToOffset,
        width: `calc(100% - ${marginLeftToOffset} )`,
      }}
    >
      <h1>This is Videos container</h1>
    </VideoContainer>
  )
}

export default Videos

// How to move the calculation of marginTopToOffset, marginLeftToOffset outside a React components?
// All the states used for calculation must be inside React functional components/ hooks

const VideoContainer = styled.div`
  min-height: 200vh;
  background-color: teal;
  /* width: 100%; */
  display: inline-block;
`
