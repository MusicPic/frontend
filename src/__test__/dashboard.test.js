import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme';
import Dashboard from '../components/dashboard/dashboard';


configureEnzyme({ adapter: new Adapter() });

describe('profile testing', () => {
  test('Simple test for initial state', () => {
expect(.state('notes')).toEqual([]);
  //   expect(mountedDashboard.state('error')).toEqual(null);
  // });
//   test('The dashboard should display', () => {
//     const mountedDashboard = enzymeShallowMount(<Dashboard/>);
//     expect(mountedDashboard.find('h2').text()).toEqual('Dashboard');
//   });
// });
//   test('The dashboard should contain an NotesForm', () => {
//     const mountedDashboard = enzymeShallowMount(<Dashboard />);
//     expect(mountedDashboard.find('NoteForm')).toBeTruthy();
//   });

//   test('Expenses should be added correctly to the internal state', () => {
//     const mountedDashboard = enzymeShallowMount(<Dashboard />);
//     mountedDashboard.setState({
//       notes: [
//         {
//           title: 'note1',
//           content: 'this is a note',
//         },
//         {
//           title: 'note2',
//           content: 'this is another note',
//         },
//       ],
//     });
//   });
// });


// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import { Provider } from 'react-redux';
// import { configure as configureEnzyme, mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import Dashboard from '../component/dashboard/dashboard';


// configureEnzyme({ adapter: new Adapter() });

// describe('#Dashboard', () => {
//   const testState = {
//     categories: [
//       {
//         budget: '456',
//         id: '0.123',
//         name: 'coffee',
//         timestamp: new Date(),
//       }, {
//         budget: '4556',
//         id: '0.5623',
//         name: 'lunch',
//         timestamp: new Date(),
//       },
//     ],
//     expenses: {
//       0.123: [],
//       0.5623: [],
//     },
//   };

//   test('Testing dashboard interactions with the store', () => {
//     const mockStore = configureStore([]);

//     const mountedDashboard = mount(<Provider store={mockStore(testState)}>
//     <Dashboard/></Provider>);
//     expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
//     expect(mountedDashboard.find('CategoryItem')).toHaveLength(2);
//   });
// });