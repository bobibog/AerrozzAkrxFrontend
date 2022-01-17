import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

 export const TextContainer = styled.div`
    width: 75%;
    margin: 50px auto;
    padding: 24px;
    background-color: white;
    display: inline-block;
    line-height: 24px;
    font-size: 16px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    
    & h5 {
        font-size: 18px;
        padding-bottom: 16px;
    }
 `