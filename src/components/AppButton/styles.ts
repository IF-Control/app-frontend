import styled from "styled-components/native";

type ButtonProps = {
    backgroundColor: string;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonProps>`
    background-color: ${props => props.backgroundColor};
    width: 60%;
    border-radius: 30px;
    padding: 8px;
    margin: 8px auto;
`;

export const TextButtonPrimary = styled.Text`
    color: #F1F1F1;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`;