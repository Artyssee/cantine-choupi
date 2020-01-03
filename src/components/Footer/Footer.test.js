import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';
import Link from 'next/link';

const wrapperShallow = shallow(<Footer />);

describe('The Footer component', () => {
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
