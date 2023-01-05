import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
`;

export const SectionScroll = styled.ScrollView`
    width: 100%;
    margin-bottom: 20px;
`;

export const LoadingView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContactAlert = styled.View`
    width: 90%;
    margin-top: 4%;
    margin-left: auto;
    margin-right: auto;
    background-color: #FEFEFE;
    border: 3px solid #F8F8F8;
    border-radius: 18px;
    padding: 14px;
    color: #111010;
`;

export const AlertTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
`;

export const AlertText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    padding-top: 8px;
`;

type AlertIconProps = {
    color: string;
}

export const AlertIcon = styled.View<AlertIconProps>`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: ${props => props.color ? props.color : '#AADCB2'};
    width: 40px;
    height: 40px;
    border-radius: 40px;
    padding: 2px 5.8px;
    text-align: center;
    justify-content: center;
`;