import React from 'react';

import {Container} from './styles';
import FilterPicker from '../FilterPicker';

export default function SearchFilter() {
  return (
    <Container
      contentContainerStyle={{alignItems: 'center'}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <FilterPicker />
      <FilterPicker />
      <FilterPicker />
      <FilterPicker />
    </Container>
  );
}
