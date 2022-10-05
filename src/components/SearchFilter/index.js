import React from 'react';

import {Container, ShadowContainer} from './styles';
import FilterPicker from '../FilterPicker';

export default function SearchFilter() {
  return (
    <ShadowContainer>
      <Container
        contentContainerStyle={{alignItems: 'center'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FilterPicker />
        <FilterPicker />
        <FilterPicker />
        <FilterPicker />
      </Container>
    </ShadowContainer>
  );
}
