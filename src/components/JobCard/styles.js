import styled from 'styled-components/native';

export const ContainerShadow = styled.View`
  border-radius: 5px;
  background-color: transparent;
  overflow: hidden;
  margin: 10px;
  elevation: 4;
`;

export const Container = styled.View`
  background-color: #fff;
  padding: 20px;
  position: relative;
`;

export const HeadWrapper = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 57px;
  height: 57px;
`;

export const HeadDescription = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const CompanyName = styled.Text`
  font-size: 12px;
`;

export const WorkRelationship = styled.Text`
  font-size: 10px;
`;
export const Open = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Split = styled.View`
  height: 2px;
  width: 100%;
  background-color: #e8e8e8;
  margin: 15px 0 12px 0;
`;

export const LocaleWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
`;

export const Locale = styled.Text`
  font-size: 10px;
`;

export const LaunchedDate = styled.Text`
  margin-left: 5px;
  font-size: 10px;
`;

export const Description = styled.Text`
  font-size: 11px;
  margin-bottom: 20px;
`;

export const TimeLapse = styled.Text`
  position: absolute;
  font-size: 10px;
  right: 20px;
  bottom: 20px;
`;
