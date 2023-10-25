import { render } from '@testing-library/react';

import FormInputDate from './FormInputDate';

describe('FormInputDate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormInputDate />);
    expect(baseElement).toBeTruthy();
  });
});
