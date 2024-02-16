import React from 'react';
import { Buttom } from '../../components/Buttom'
import { Header } from '../../components/header'
import * as S from './styled'
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navegate = useNavigate();

    const handleClickSingIn = () =>{
        navegate('/feed')
    }
    return (
    <>
        <Header/>
        <S.Container>
            <S.Column>
                <S.Title>
                A plataforma para você aprender com experts, 
                dominar as principais tecnologias e 
                entrar mais rápido nas empresas mais desejadas.
                </S.Title>
            </S.Column>
            <S.Column>
                <S.Warrep>
                    <S.TitleLogin>Faça seu cadastro</S.TitleLogin>
                    <S.SubTitleLogin>Faça seu login e make the change</S.SubTitleLogin>
                    <S.Form>
                        <Input placeholder='E-mail' leftIcon={<MdOutlineEmail />} />
                        <Input placeholder='Senha' type='password' leftIcon={<MdLockOutline/>} />
                        <Buttom title='Entra' variant='secundary' onClick={handleClickSingIn} type='button'/>
                    </S.Form>
                    <S.Row>
                        <S.ExqueciText>Esqueci minha senha</S.ExqueciText>
                        <S.CreatText>Criar conta</S.CreatText>
                    </S.Row>
                </S.Warrep>
            </S.Column>
        </S.Container>
    </>
  )
}
