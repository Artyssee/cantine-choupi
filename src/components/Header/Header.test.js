import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './';
import Link from 'next/link';

const wrapperShallow = shallow(<Navigation />);

describe('The Header component', () => {
  it('renders correctly', () => {
    expect(wrapperShallow).toMatchSnapshot();
  });

  it('renders at least one link', () => {
    expect(wrapperShallow.find('ul').contains([
      <li key={1}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
    ])).toBe(true);
  });
});
