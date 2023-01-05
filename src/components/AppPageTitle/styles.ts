import styled from "styled-components/native";

export const TitleBox = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
`;

export const Line = styled.View`
    height: 3px;
    width: 16%;
    background-color: #005600;
    margin: 0 auto;
    margin-bottom: 4px;
`;