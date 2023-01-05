import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
`;

export const SectionScroll = styled.ScrollView`
    width: 100%;
    margin-bottom: 20px;
`;

export const Card = styled.View`
    background-color: #fefefe;
    padding: 10px;
`;

export const ListItems = styled.View`
    justify-content: center;
    align-items: center;
    margin: 6px 0;
`;

export const HealthTipDescriptionText = styled.Text`
    text-align: justify;
    font-size: 16px;
`;

export const HealthTipName = styled.Text`
    font-weight: bold;
    font-size: 16.5px;
`;

export const LoadingView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;