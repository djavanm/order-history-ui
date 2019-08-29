import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card' , () => {
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
    const wrapper = shallow(<Card purchase={mockData}
    />)
    expect(wrapper).toMatchSnapshot();
  })
});