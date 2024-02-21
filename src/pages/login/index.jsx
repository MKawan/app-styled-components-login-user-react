import React, { useState } from 'react';
import { Buttom } from '../../components/Buttom'
import { Header } from '../../components/header'
import * as S from './styled'
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

export const Login = () => {

    const schams = yup.object({
        email: yup.string().email('email não é valido').required('Campo Obrigatório'),
        password: yup.string().min(7, 'No minimo 8 caracteres').required('Campo Obrigatório'),
    })

    const navegate = useNavigate();

    const {control, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schams),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try {
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.id){
                navegate('/feed');
            }

        } catch {
            alert('Usuário ou senha inválido')
            //TODO: HOUVE UM ERRO
        }
    }

    // console.log(isValid ,errors);

    // const handleClickSingIn = () =>{
    //     navegate('/feed')
    // }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name='email' errorMessage={errors.email && errors.email.message} control={control} placeholder='E-mail'  leftIcon={<MdOutlineEmail />} />
                        <Input name='password' errorMessage={errors.password && errors.password.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLockOutline/>} />
                        <Buttom title='Entra' variant='secundary' type='submit'/>
                    </form>
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
