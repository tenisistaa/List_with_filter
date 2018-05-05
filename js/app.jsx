import React from 'react';
import ReactDOM from 'react-dom';
document.addEventListener('DOMContentLoaded',function(){

	const allUsers = ['Michał', 'Kasia', 'Jacek', 'Marta', 'Tomek', "Ania"]

	class App extends React.Component {
		constructor() {
			super();
			this.state = {
				input: null,
				filteredUsers: allUsers
			};
		}

		newPerson(e) {
			this.setState ({
				input: e.target.value
			});
		}

		addPerson() {
			this.setState ({
				filteredUsers: allUsers.push(this.state.input)
			});
		}

		filterUsers(e) {
			const text = e.currentTarget.value;
			const filteredUsers = this.getFilteredUsersForText(text)
			this.setState({
				filteredUsers
			});
		}

		getFilteredUsersForText(text) {
			return allUsers.filter(user => 
				user.toLowerCase().includes(text.toLowerCase()))
		}

		render() {
			return (
				<div>
					<label>New Person </label>
					<input type="text" placeholder="name" onChange={this.newPerson}/>
					<button onClick={this.addPerson}>Add new</button>
					<label>Search </label>
					<input onInput={this.filterUsers.bind(this)} />
					<UsersList users={this.state.filteredUsers} />
				</div>
			);
		}
	};

	const UsersList = ({ users }) => {
		if(users.length > 0){
			return (
				<ul>
					{users.map(user => <li key={user}>{user}</li>)}
				</ul>
			);
		}
		return (
			<p>No results!</p>
		)
	};

	ReactDOM.render(
		<App />,
		document.getElementById('app')
	);

});