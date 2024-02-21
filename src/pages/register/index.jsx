import React, { useState } from 'react';
import { Buttom } from '../../components/Buttom'
import { Header } from '../../components/header'
import * as S from './styled'
import { MdOutlineEmail, MdLockOutline, MdPerson, MdDataSaverOn  } from "react-icons/md";
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export const Register = () => {

    const schams = yup.object({
        email: yup.string().email('email não é valido').required('Campo Obrigatório'),
        name: yup.string().min(7, 'Nome no minimo 7 caracteres').required('Campo Obrigatório'),
        password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo Obrigatório'),
    })


    const {control, handleSubmit,reset, formState: {errors}} = useForm({
        resolver: yupResolver(schams),
        mode: 'onChange',
    });
    const limparFormulario = () =>{
        reset();
    }
    const onSubmit = async formData => {
        try {
            const id = await uuidv4();
            const dataFrom = {
                "id": `${id}`,
                "name": `${formData.name}`,
                "emial": `${formData.email}`,
                "password": `${formData.password}`
            }
           await api.post('users?', dataFrom);
                       
           alert('Conta crida com sucesso');
           limparFormulario();
        } catch {
            alert('Por favor precher todos os campos')
            //TODO: HOUVE UM ERRO
        }
    }

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
                dominar as principais tecnologias e entrar mais
                rápido nas empresas mais desejadas.
                </S.Title>
            </S.Column>
            <S.Column>
                <S.Warrep>
                    <S.TitleLogin>Comece agora grátis</S.TitleLogin>
                    <S.SubTitleLogin>Crie sua conta e make the change._</S.SubTitleLogin>
                    <form id='resetFrom' onSubmit={handleSubmit(onSubmit)} style={{marginBottom: 35 + 'px'}}>
                        <Input id='name' name='name' errorMessage={errors.name && errors.name.message} control={control} placeholder='name'  leftIcon={<MdPerson />} />
                        <Input id='email' name='email' errorMessage={errors.email && errors.email.message} control={control}   placeholder='E-mail' leftIcon={<MdOutlineEmail />} />
                        <Input id='password' name='password' errorMessage={errors.password && errors.password.message} control={control}  placeholder='Senha' type='password' leftIcon={<MdLockOutline/>} />
                        <Buttom title='Criar minha conta' variant='secundary' type='submit' />
                    </form>
                    <S.SubTitleLogin style={{marginBottom: 18 + 'px'}} >Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</S.SubTitleLogin>
                    <S.Row>
                        <S.ExqueciText>Já tenho conta.</S.ExqueciText>
                        <S.CreatText>Fazer Login</S.CreatText>
                    </S.Row>
                </S.Warrep>
            </S.Column>
        </S.Container>
    </>
  )
}
