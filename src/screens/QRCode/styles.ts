import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    align-items: center;
    justify-content: center;
`;

export const FirstText = styled.Text`
    font-size: 20px;
    text-align: center;
    padding: 40px;
`;
