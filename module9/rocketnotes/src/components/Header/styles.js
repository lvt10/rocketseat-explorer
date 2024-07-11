import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 6.30rem;
    width: 100%;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 4rem;
 
     

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img{
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 0.4rem;
        line-height: 0.75rem;

        span{
            font-size: 0.45rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 0.5rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;

    >svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 0.9rem;
    }


`