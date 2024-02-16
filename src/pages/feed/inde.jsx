import React from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/header'
import { UserInfo } from '../../components/userInfo'
import * as S from './styled'

export const Feed = () => {
  return (
    <>
      <Header autentication={true}/>
      <S.Container>
        <S.Column flex={3}>
        <S.Title>Feed</S.Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.Column>
        <S.Column flex={1}>
        <S.TitleWigthLight># RANKING 5 TOP DA SEMANA</S.TitleWigthLight>
          <UserInfo name='Mateus Kawan' image='https://avatars.githubusercontent.com/u/51447066?v=4' percentual={80} />
          <UserInfo name='Mateus Kawan' image='https://avatars.githubusercontent.com/u/51447066?v=4' percentual={75} />
          <UserInfo name='Mateus Kawan' image='https://avatars.githubusercontent.com/u/51447066?v=4' percentual={70} />
          <UserInfo name='Mateus Kawan' image='https://avatars.githubusercontent.com/u/51447066?v=4' percentual={60} />
          <UserInfo name='Mateus Kawan' image='https://avatars.githubusercontent.com/u/51447066?v=4' percentual={55} />
        </S.Column>
      </S.Container>
    </>
  )
}
