import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

// Cabeçalho
export const Header = styled.View`
    position: relative;
    width: 100%;
    padding: 36px 20px 6px 20px;
    display: flex;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;

export const HelloUser = styled.Text`
    font-size: 16px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
`;

export const UserName = styled.Text`
    font-family: '${({ theme }) => theme.FONTS.TEXT_BOLD}';
`;

export const SettingsButton = styled.View`
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
`;

// Título da página
export const TitleBox = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
`;

export const Line = styled.View`
    height: 3px;
    width: 16%;
    background-color: #005600;
    margin: 0 auto;
`;