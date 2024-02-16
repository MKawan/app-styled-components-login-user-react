import styled from "styled-components";

export const CardContainer = styled.div`

    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`;

export const ImageBackgraund = styled.img`

    width: 100%;
    height: 100px;
`;

export const Content = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const UserInfo = styled.div`

    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div{
        margin-left: 12px;
    }

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
    }
`;

export const UserPicture = styled.img`

    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 1px solid #ffffff;
`;

export const PostInfo = styled.div`

    margin-bottom: 12px;

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`;


export const MaisInfo = styled.div`

    margin-bottom: 12px;

    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff80;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
`;