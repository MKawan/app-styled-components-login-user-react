import React from 'react'
import * as S from './styled'
import { FiThumbsUp } from "react-icons/fi";

export const Card = () => {
  return (
    <S.CardContainer>
        <S.ImageBackgraund src='https://belenos.me/media/2021-04-nextjs-freepik-kanbox.webp' />
        <S.Content>
            <S.UserInfo>
                <S.UserPicture src='https://avatars.githubusercontent.com/u/51447066?v=4' />
                <div>
                    <h4>Mateu Kawan</h4>
                    <p>Há 0 minutos</p>
                </div>
            </S.UserInfo>
            <S.PostInfo>
                <h4>Projeto para curso de React NestJS</h4>
                <p>Projeto feito no curso de Formação React no Bootcamp DIO do Pro...</p>
            </S.PostInfo>
            <S.MaisInfo>
                <h4>React, Javascipt</h4>
                <p>
                    <FiThumbsUp /> 89
                </p>
            </S.MaisInfo>
        </S.Content>
    </S.CardContainer>
  )
}
