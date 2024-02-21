import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Warrep = styled.div`

    max-width: 350px;
`; 

export const Column = styled.div`

   display: flex;
   align-items: flex-start;
   justify-content: flex-start;

`;

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Title = styled.h2`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    margin-top: 0;
    width: 50%;
    color:  #ffffff;
`;

export const TitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 350px;
    line-height: 44px;

`;

export const SubTitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

`;

export const ExqueciText = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    margin-right: 10px;
`;

export const CreatText = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;

    color: #23DD7A;
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;