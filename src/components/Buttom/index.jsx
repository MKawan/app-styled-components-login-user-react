import React from 'react'
import { ButtonContainer } from './styled'


export const Buttom = ({title, variant='primary', onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}
