import React from 'react'
import * as S from './styled'
import { Buttom } from '../Buttom'

export const Header = ({autentication}) => {
  return (
    <S.Wrapper>
        <S.Container>
            <S.Row>
                <img width={64} height={34} src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' alt='lolo da dio'/>
                {autentication ? <>
                    <S.BuscarIpuntContainer>
                        <S.Input placeholed='Buscar...'/>
                    </S.BuscarIpuntContainer>
                    <S.Menu>Live Code</S.Menu>
                    <S.Menu>Global</S.Menu>
                </> : null}
            </S.Row>
            <S.Row>
                {autentication ? 
                    (<S.UserPicture src='https://avatars.githubusercontent.com/u/51447066?v=4' />)
                     : 
                    <>
                        <Buttom title='Entrar'/>
                        <Buttom title='Cadastrar'/>
                    </>                   
                    }
            </S.Row>
        </S.Container>
    </S.Wrapper>
  )
}
