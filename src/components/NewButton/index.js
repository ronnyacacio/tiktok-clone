import React from 'react';
import { Entypo } from '@expo/vector-icons';

import { Button } from './styles';

export default function NewButton() {
  return (
    <Button>
      <Entypo name="plus" size={22} color="#000" />
    </Button>
  );
}
