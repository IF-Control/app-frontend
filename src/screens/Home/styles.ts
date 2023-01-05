import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const TabSection = styled.View``;

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

// Área dos prédios
export const TitleType = styled.Text`
    font-size: 18px;
    margin: 10px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
`;

export const HeaderBuild = styled.View`
    background-color: #2F9E41;
    padding: 7px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`;

export const SlideArea = styled.View``;