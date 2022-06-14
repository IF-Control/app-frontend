import styled from "styled-components/native";

export const ButtonRefresh = styled.TouchableOpacity`
    position: absolute;
    top: 85%;
    left: 80%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;