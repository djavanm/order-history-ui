import React from 'react';
import Container from './Container';
import { shallow } from 'enzyme';

describe('Container' , () => {
  let mockData;
  beforeEach(() => {
    mockData = {
      id: 1,
      name: 'Djavan',
      price: 9999, 
      description: 'Great for the whole family',
      img: 'random corner of the internet'
    }
  })
  it('should match the snapshot with the mock data', () => {
    const wrapper = shallow(<Container purchases={[mockData]}
    />)
    expect(wrapper).toMatchSnapshot();
  })
});