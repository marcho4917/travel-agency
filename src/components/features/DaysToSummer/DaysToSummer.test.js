import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}T15:00:00Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDays = component.find('.component').text();
    expect(renderedDays).toEqual(expectedDescription);
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mockDate', () => {
  checkDescriptionAtTime('2020-06-19', '1 day to summer!');
  checkDescriptionAtTime('2020-06-25', '');
  checkDescriptionAtTime('2021-06-18', '2 days to summer!');
});