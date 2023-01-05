import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContainerBody = styled.ScrollView`
    width: 100%;
    padding: 6px;
`;

export const FormBox = styled.View`
    width: 90%;
    background-color: #F8F8F8;
    border-radius: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px auto;
`;

export const FormHeader = styled.View`
    width: 100%;
`;

export const FormH1 = styled.Text`
    width: 100%;
    color: #0C250C;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin: 0 auto;
`;

export const FormH1Line = styled.View`
    height: 3px;
    width: 16%;
    background-color: #005600;
    margin: 0 auto;
`;

export const FormBody = styled.View`
    width: 100%;
`;

export const InputGroup = styled.View`
    width: 80%;
    margin: 10px auto;
`;

export const InputLabel = styled.Text`
    width: 100%;
    color: #414141;
    font-size: 16px;
    margin-bottom: 6px;
`;

export const InputData = styled.TextInput`
    width: 100%;
    padding: 7px 10px;
    border: 1px solid #A7A7A7;
    background-color: #FFFFFF;
    border-radius: 20px;
    font-size: 16px;
`;

export const FormBottom = styled.View`
    width: 80%;
    margin: 10px auto;
`;

export const Link = styled.Text`
    color: #005600;
    font-size: 16px;
    margin-bottom: 8px;
`;

export const ErrorMessage = styled.Text`
    color: #CF3C3C;
    font-size: 15px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
    text-align: center;
`;

export const Spinner = styled.ActivityIndicator`
    margin-top: 10px;
`;

export const SuccessMessage = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_700};
    font-size: 15px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
    text-align: center;
`;