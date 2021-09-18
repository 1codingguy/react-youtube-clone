import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'

const Videos = () => {
  const { marginTopToOffset, marginLeftToOffset } = useGlobalContext()

  return (
    <VideoContainer
      marginTopToOffset={marginTopToOffset}
      marginLeftToOffset={marginLeftToOffset}
    >
      <h1>This is Videos container</h1>
    </VideoContainer>
  )
}

export default Videos

const VideoContainer = styled.div`
  min-height: 200vh;
  background-color: lightsteelblue;
  /* width: 100%; */
  display: inline-block;
  margin-top: ${(props) => props.marginTopToOffset}px;
  margin-left: ${(props) => props.marginLeftToOffset}px;
  width: calc(100% - ${(props) => props.marginLeftToOffset}px);
`
