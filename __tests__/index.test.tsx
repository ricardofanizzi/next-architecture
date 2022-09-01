import { render } from '@testing-library/react';
import Home from '../src/pages';

describe('Home', () => {
  it('renders a Layout', () => {
    render(<Home />);

    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});
