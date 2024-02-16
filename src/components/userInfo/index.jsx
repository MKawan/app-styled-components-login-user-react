import React from 'react'
import * as S from './styled'

export const UserInfo = ({name, image, percentual}) => {
  return (
    <S.Container>
        <S.UserPicture src={image} />
        <div>
            <S.NameText>{name}</S.NameText>
            <S.Progress percentual={percentual}/>
        </div>
    </S.Container>
  )
}

