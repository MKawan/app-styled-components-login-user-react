import React from 'react';
import { Buttom } from '../../components/Buttom'
import { Header } from '../../components/header'
import * as S from './styled'
import TemplateHome from '../../assets/img/TempleteHome.png'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navegate = useNavigate();

    const handleClickSingIn = () =>{
        navegate('/login')
    }
    return (
    <>
        <Header/>
        <S.Container>
            <div>
                <S.Title>
                    <S.TitleWigthLight>
                        Implemente
                        <br/>
                    </S.TitleWigthLight>
                    O seu futuro global agora!
                </S.Title>
                <S.textContent>
                  Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
                   e encare seu novo desafio profissional, evoluindo em comunidade com os 
                   melhores experts.
                </S.textContent>
                <Buttom title='Começar agora' variant='secundary' onClick={handleClickSingIn} type='button'/>
            </div>
            <div>
                <img src={TemplateHome} alt='template dio'/>
            </div>
        </S.Container>
    </>
  )
}
