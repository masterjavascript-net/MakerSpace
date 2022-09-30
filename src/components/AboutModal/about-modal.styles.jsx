import styled from 'styled-components';

export const ModalBackground = styled.div`
    display: flex;
    /* display: none; */
    justify-content: center;
    align-items:center;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top:0;
    background-color: rgba(0,0,0,0.7);
    z-index:999;
    transition: 0.2s ease-in;

`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 920px;
    background-color: #111;
    padding: 5rem 3rem;
    border-radius: 12px;
    transition: 0.3s all;

    .img-wrapper{
        width: 100%;

        img{
            width: 100%;
            border-radius: 12px;
        }
    }

    .content{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.5rem;

        .title{
            color: #fff;
            font-size: 32px;
            margin: 1rem 0;
        }
        .text{
            font-size: 18px;
            color: #56595F;
        }
    }


    .close-btn{
        width: 40px;
        height: 40px;
        background-color: #fff;
        position: absolute;
        right: -3rem;
        top: -3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: #0CC9C3;
            font-size: 24px;
        }
    }

    .close-btn-2{
        width: 30%;
        background: transparent;
        border: 1px solid #56595F;
        color: #fff;
        outline: none;
        padding: .3rem .7rem;
        border-radius: 5px;
        margin-top: .8rem;
        transition: 0.3s;

        &:hover{
            border-color: #0CC9C3;
            color: #0CC9C3;
        }
    }
`

