import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './Header';

test('Header renders', () => {
  render(<Header />);
})