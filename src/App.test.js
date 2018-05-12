import React from 'react';
import { shallow } from 'enzyme';
import App, { UsersList } from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});

it('shows message when there are no users', () => {
  const usersList = shallow(<UsersList users={[]} />);
  expect(usersList.text()).toContain('No results!')
});

it(`doesn't show message when there are users`, () => {
  const usersList = shallow(<UsersList users={['Michal']} />);
  expect(usersList.text()).not.toContain('No results!')
});

it(`shows a list of users`, () => {
  const users = ['Michal', 'Ania'];
  const usersList = shallow(<UsersList users={users} />);
  expect(usersList.find('li').length).toEqual(users.length);
});

describe('list of users', () => {
  const users = ['Michal', 'Ania'];
  const usersList = shallow(<UsersList users={users} />);
  
  users.forEach(user => {
      it(`includes name ${user} on the list`, () => {
          expect(usersList.containsMatchingElement(<li>{user}</li>)).toEqual(true)
      });
  });
});