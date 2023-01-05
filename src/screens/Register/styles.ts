import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    padding-bottom: 20px;
`;

export const ContainerBody = styled.ScrollView``;

export const FormLoginBox = styled.View`
    width: 90%;
    background-color: #F8F8F8;
    border-radius: 16px;
    padding: 12px 4px;
    margin: 10px auto;
`;

export const FormLoginHeader = styled.View`
    width: 100%;
`;

export const FormLoginH1 = styled.Text`
    width: 100%;
    color: #0C250C;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin: 0 auto;
`;

export const FormLoginH1Line = styled.View`
    height: 3px;
    width: 16%;
    background-color: #005600;
    margin: 0 auto 10px;
`;

export const FormLoginBody = styled.View`
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

export const FormLoginBottom = styled.View`
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

export const Content = styled.View`
  margin-top: 18px;
`

export const Title = styled.Text`
  font-weight: bold;
  color: #212121;
`

export const Text = styled.Text`
  margin-left: 4px;
  color: #616161;
`

export const View = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.Image`
  width: 10px;
  height: 10px;
`

export const Spinner = styled.ActivityIndicator`
    margin-top: 10px;
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