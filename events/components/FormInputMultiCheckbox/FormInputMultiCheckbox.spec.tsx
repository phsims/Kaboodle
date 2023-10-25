import { render } from '@testing-library/react';

import FormInputMultiCheckbox from './FormInputMultiCheckbox';

describe('FormInputMultiCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormInputMultiCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
