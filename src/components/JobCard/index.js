import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import LogoImg from '../../assets/job_standard.png';

import {
  ContainerShadow,
  Container,
  HeadWrapper,
  Logo,
  HeadDescription,
  Title,
  CompanyName,
  WorkRelationship,
  Open,
  Split,
  LocaleWrapper,
  Locale,
  LaunchedDate,
  Description,
  TimeLapse,
} from './styles';

export default function JobCard() {
  return (
    <ContainerShadow>
      <Container>
        <HeadWrapper>
          <Logo source={LogoImg} />
          <HeadDescription>
            <Title>UI/UX Designer Junior</Title>
            <CompanyName>Torchinha Inc.</CompanyName>
            <WorkRelationship>Junior . CLT</WorkRelationship>
          </HeadDescription>
        </HeadWrapper>
        <Open>
          <Icon name="open-outline" size={25} color="#BFBFBF" />
        </Open>
        <Split />
        <LocaleWrapper>
          <Locale>São Paulo Capital, São Paulo, Brasil</Locale>

          <LaunchedDate>20/02/2022</LaunchedDate>
        </LocaleWrapper>
        <Description>
          Procuramos um profissional para ocupar a posição de UX Designer em um
          cliente referência no setor de produção de imunobiológicos (vacinas) e
          análises laboratoriais veterinários Ver mais...
        </Description>
        <TimeLapse>Há 22h</TimeLapse>
      </Container>
    </ContainerShadow>
  );
}
