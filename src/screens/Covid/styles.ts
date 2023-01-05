import styled from "styled-components/native";

export const Container = styled.ScrollView`
    z-index: 0;
    elevation: 0;
`;

export const Card = styled.View`
    margin: 0 auto;
    width: 90%;
    background-color: #F8F8F8;
    border-radius: 16px;
    padding: 12px 4px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    z-index: 0;
    elevation: 0;
`;

export const CardBody = styled.View`
    width: 80%;
    margin: 10px auto;
`;

export const FormText = styled.Text`
    margin: 10px 0;
    width: 100%;
    color: #414141;
    font-size: 16px;
    text-align: justify;
`;

export const Link = styled.Text`
    color: #2F9E41;
    font-size: 16px;
    line-height: 16px;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const RadioBtn = styled.View`
    flex: 1;
    flex-direction: row;
`;
export const RadioTxt = styled.Text`
    flex: 5;
    align-self: center;
    color: #414141;
    font-size: 16px;
`;

export const UploadBtn = styled.TouchableOpacity`
    width: 60%;
    height: 45px;
    background-color: #005600;
    border-radius: 10px;
    padding: 8px;
    flex-direction: row;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export const UploadTxt = styled.Text`
    margin: 0 auto;
    color: #F1F1F1;
    text-align: center;
    text-transform: uppercase;
`;

export const Separator = styled.View`
    width: 90%;
    margin: 0 auto 10px;
    background-color: #F0F0F0;
    height: 3.5px;
`;

export const Spinner = styled.ActivityIndicator`
    margin-top: 10px;
`;

export const ErrorMessage = styled.Text`
    color: #CF3C3C;
    font-size: 15px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
    text-align: center;
`;

export const SuccessMessage = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_700};
    font-size: 15px;
    font-family: '${({ theme }) => theme.FONTS.TEXT}';
    text-align: center;
`;