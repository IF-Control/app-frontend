import styled from 'styled-components/native';

export const Card = styled.View`
  flex-direction: column;
  width: 95%;
  background-color: #f5f5f5;
  box-shadow: 10px 10px 10px #000;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3px;
  elevation: 5;
  margin: 0 auto 20px auto;
`;

export const Buildings = styled.View`
  flex-direction: row;
`;

type BuildingButtonProps = {
  selected: boolean;
}

export const BuildingButton = styled.TouchableOpacity<BuildingButtonProps>`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 40px;
  background-color: ${props => props.selected ? '#f3f2f2' : '#EBEBEB'};
`;

export const BuildingData = styled.ScrollView`
  min-height: 250px;
  background-color: #fafafa;
  padding: 15px;
`;

type SelectedBuilding = {
  selected: boolean;
}

export const Line = styled.View<SelectedBuilding>`
  height: 1px;
  width: 30%;
  background-color: ${props => props.selected ? '#2F9E41' : '#f3f2f2'};
  margin: 0 auto;
`;

export const EnvironmentContainer = styled.ScrollView`
  min-height: 250px;
  background-color: #fafafa;
  padding: 15px;
`;

export const TextBuilding = styled.Text<SelectedBuilding>`
  color: ${props => props.selected ? '#005600' : '#000'};
  fontWeight: ${props => props.selected ? 'bold' : 'normal'};
`;