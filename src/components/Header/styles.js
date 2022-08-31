import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e0edfd;
`;

export const Logo = styled.Text`
  font-size: 16px;
  color: #1165ba;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 0 10px;
  background-color: #ecf5ff;
  padding: 0 10px;
  border-radius: 10px;
  border: 2px solid #c1dfff;
`;

export const Label = styled.Text``;

export const Input = styled.TextInput`
  padding: 5px 0;
`;
export const Action = styled.TouchableOpacity``;

export const Notification = styled.TouchableOpacity``;

export const Menu = styled.TouchableOpacity``;
