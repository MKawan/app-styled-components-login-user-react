import React from 'react'
import * as S from './styled'
import { Controller } from 'react-hook-form';

export const Input = ({leftIcon, errorMessage, name, control, ...rest}) => {
  return (
    <>
      <S.InputContainer>
        {leftIcon? (<S.IconContainer>{leftIcon}</S.IconContainer>) : null}
        
        <Controller
          name={name}
          control={control}
          rules={{required: true}}
          render={({field}) => <S.InputText {...field} {...rest}/>}
        />
      </S.InputContainer>
        {errorMessage ? <S.ErrorText>{errorMessage}</S.ErrorText> : null}
    </>
  )
};
