import styled from 'styled-components/native';

export const ShadowContainer = styled.View`
  background-color: transparent;
  overflow: hidden;
  elevation: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-top-color: #deebfb;
  border-top-width: 1px;
  border-bottom-color: transparent;
  border-bottom-width: 2px;
`;
export const Container = styled.ScrollView`
  width: 100%;
  height: 40px;
  background-color: #ffff;
  flex: none;
  padding: 0 20px;
  box-shadow: 10px 5px 5px black;
  flex-direction: row;
`;
