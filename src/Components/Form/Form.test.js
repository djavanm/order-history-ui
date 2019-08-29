import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form' , () => {
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
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form postNewPurchase={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the postNewPurchase method when clicked', () => {
    const postNewPurchaseMock = jest.fn();
    const wrapper = shallow(<Form postNewPurchase={postNewPurchaseMock}
    />)
    wrapper.find('button').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(postNewPurchaseMock).toHaveBeenCalled();
  })
});