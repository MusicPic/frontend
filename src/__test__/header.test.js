import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Header from '../components/header/header';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('The dashboard should display', () => {
    const mountedHeader = enzymeShallowMount(<Header/>);
    expect(mountedHeader.find('li').text()).toEqual('Home');
  });
});

// configure({ adapter: new Adapter() });

// describe('Dashboard testing', () => {
//   test('Simple test for initial state', () => {
//     const mountedDashboard = mount(<NoteForm />);
//     expect(mountedDashboard.state('title')).toEqual('');
//     expect(mountedDashboard.state('content')).toEqual('');
//   });
// });
