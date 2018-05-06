import React from 'react';
import ReactDOM from 'react-dom';
document.addEventListener('DOMContentLoaded',function(){

	const allUsers = ['Michał', 'Kasia', 'Jacek', 'Marta', 'Tomek', "Ania"]

	class App extends React.Component {
		constructor() {
			super();
			this.state = {
				input: '',
				filteredUsers: allUsers
			};
		}

		newPerson(e) {	
			this.setState ({
				input: e.target.value
			});
		}

		addPerson() {
			allUsers.push(this.state.input);
			this.setState ({
				filteredUsers: allUsers
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
					<label>New Person</label>
					<input type="text" placeholder="name" onChange={(e) => this.newPerson(e)}/>
					<button onClick={() => this.addPerson()}>Add new</button>
					<label>Search </label>
					<input onInput={(e) => this.filterUsers(e)} />
					<UsersList users={this.state.filteredUsers} />
				</div>
			);
		}
	};

	const UsersList = ({ users }) => {
		if(users.length > 0){
			return (
				<ul>
					{users.map((user,i) => <li key={i}>{user}</li>)}
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