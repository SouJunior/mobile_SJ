import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import LogoImg from '../../assets/job_standard.png';
import {
  Container,
  HeadWrapper,
  Logo,
  Title,
  CompanyName,
  WorkRelationship,
  LocaleWrapper,
  Locale,
  LaunchedDate,
  Description,
} from './styles';

export default function JobCard() {
  return (
    <Container>
      <HeadWrapper>
        <Logo source={LogoImg} />
        <Title>UI/UX Designer Junior</Title>
        <CompanyName>Torchinha Inc.</CompanyName>
        <WorkRelationship></WorkRelationship>
      </HeadWrapper>
      <LocaleWrapper>
        <Locale>São Paulo Capital, São Paulo, Brasil</Locale>
        <LaunchedDate>20/02/2022</LaunchedDate>
      </LocaleWrapper>
      <Description>
        Procuramos um profissional para ocupar a posição de UX Designer em um
        cliente referência no setor de produção de imunobiológicos (vacinas) e
        análises laboratoriais veterinários Ver mais...
      </Description>
    </Container>
  );
}
