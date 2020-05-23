import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../src/App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('<App.js>', () => {
  afterEach(cleanup);

  it('matches the App component snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
