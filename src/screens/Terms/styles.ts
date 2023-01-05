import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    padding-bottom: 20px;
`;

export const ContainerBody = styled.ScrollView``;

export const ViewBox = styled.View`
    width: 90%;
    background-color: #F8F8F8;
    border-radius: 16px;
    padding: 12px 4px;
    margin: 10px auto;
`;

export const ViewBoxHeader = styled.View`
    width: 100%;
`;

export const ViewBoxH1 = styled.Text`
    width: 100%;
    color: #0C250C;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 0 auto;
    padding-bottom: 8px;
`;

export const ViewBoxH1Line = styled.View`
    height: 3px;
    width: 16%;
    background-color: #005600;
    margin: 0 auto 10px;
`;

export const ViewBoxBody = styled.View`
    width: 100%;
`;

export const ViewBoxGroup = styled.View`
    width: 80%;
    margin: 10px auto;
`;

export const ViewBoxTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
    padding-top: 6px;
    padding-bottom: 8px;
`;

export const ViewBoxText = styled.Text`
    font-size: 16px;
    text-align: justify;
`;