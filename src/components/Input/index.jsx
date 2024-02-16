import React from 'react'
import * as S from './styled'

export const Input = ({leftIcon, name, ...rest}) => {
  return (
    <S.InputContainer>
        {leftIcon? (<S.IconContainer>{leftIcon}</S.IconContainer>) : null}
        <S.InputText {...rest}/>
    </S.InputContainer>
  )
};
