// import React from 'react';

const Person = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('p', {}, props.ocupation),
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement(
			'h1',
			{ className: 'title', key: '1' },
			'React IS rendered'
		),
		React.createElement(Person, { name: 'Yihua', ocupation: 'teacher' }, null),
		React.createElement(
			Person,
			{ name: 'Andrei', ocupation: 'lead teacher' },
			null
		),
		React.createElement(Person, { name: 'Poniat', ocupation: 'coder' }, null),
	]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
