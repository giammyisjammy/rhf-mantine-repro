import { render, screen } from '@test-utils';
import { Form } from './Form';

describe('Form component', () => {
  it('renders', () => {
    render(<Form />);
    expect(screen.getByText(/Awesome Chip/i)).toBeInTheDocument();
  });
});
