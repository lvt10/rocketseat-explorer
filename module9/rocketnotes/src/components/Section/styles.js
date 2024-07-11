import styled from "styled-components";

export const Container = styled.section`
    margin: 3rem 0 2.6rem;

    > h2{
        border-bottom-width: 0.1rem;
        border-bottom-style: solid;
        border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

        padding-bottom: 0.5rem;
        margin-bottom: 0.8rem;

        color: ${({theme})=> theme.COLORS.GRAY_100};
        font-size: 0.6rem;
        font-weight: 400;
    }
`