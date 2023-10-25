import { render } from '@testing-library/react';

import EventsForm from './EventsForm';

describe('EventsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsForm />);
    expect(baseElement).toBeTruthy();
  });
});
