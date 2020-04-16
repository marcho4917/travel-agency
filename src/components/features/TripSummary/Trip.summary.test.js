import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct url', () => {
    const expectedURL = 'abc';
    const component = shallow(<TripSummary id={expectedURL} tags={[]}/>);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedURL}`);
  });

  it('should render correct image', () => {
    const expectedImageSrc = 'image.jpg';
    const expectedImageAlt = 'somethnig';
    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} tags={[]}/> );
    
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
  });

  it('renders correct props: name, cost, days', () => {
    const expectedName = 'TripDestination';
    const expectedCost = '$100';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
    
    expect(component).toBeTruthy();
  });

  it('should throw error without any of props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('checks that the props are rendered in good order ', () =>{
    const tagsArray = ['people', 'animals', 'trolls'];
    const component = shallow(<TripSummary tags={tagsArray} />);

    expect(component.find('.tag').at(0)).toEqual[tagsArray[0]];
    expect(component.find('.tag').at(1)).toEqual[tagsArray[1]];
    expect(component.find('.tag').at(2)).toEqual[tagsArray[2]];
  });

  it('if prop "tags" is empty or not egist, do not render div with its class', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component.find('.tags')).toEqual({});
  });
});