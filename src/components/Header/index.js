import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

import {
  Container,
  Logo,
  InputWrapper,
  Label,
  Input,
  Notification,
  Menu,
  Action,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        Sou<Text style={{fontSize: 16, fontWeight: 'bold'}}>Junior</Text>
      </Logo>
      <InputWrapper>
        <Label>O que</Label>
        <Input placeholder="cargo, área..." />
        <Ionicons name="search" size={20} />
      </InputWrapper>
      <Action>
        <Ionicons name="notifications-outline" color="#1165BA" size={30} />
      </Action>
      <Action>
        <Ionicons name="menu" color="#1165BA" size={30} />
      </Action>
    </Container>
  );
}
