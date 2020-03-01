![Codewonders](https://i.ibb.co/27nrGK1/overstateful-1.png)

# Over Stateful

🦍A small state management with less setup and super scalability in your react
app.

<!-- useState, but simplified for complex states in React apps. -->

## ✨ Features

- 📦 ~286b (gzipped)
- 🔥 Easy to scale
- 🙅‍♂️ Zero dependencies
- ✂️ Super-flexible API
- ✅ Fully tested and reliable
- 🌈 More declarative than `React.useState`
- ⚒ CommonJS, ESM & browser standalone support

## 🔧 Installation

You can easily install this package with yarn or npm:

```
$ yarn add over-stateful
```

or

```
$ npm install --save over-stateful
```

## 📖 Usage

Some usage terms you need to be familar with – `createStore`, `useOverProvider`
and `useOverState`, `OverProvider`, `store` :

- _createStore_, takes in the central state and the central reducers,
- _useOverProvider_, internal tool that handles the reducer and state.
- _useOverState_, hooks that handle reading state and dispatching actions
- _OverProvider_, React element that takes in the store, -_store_, Proxy object
  with your state.

Here is a simple example: `store.js`

```js
export const addOne = () => ({ type: 'ADD_ONE_COUNT' });
export const minusOne = () => ({ type: 'MINUS_ONE_COUNT' });

export const countReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE_COUNT':
      return { count: state.count + 1 };
    case 'MINUS_ONE_COUNT':
      return { count: state.count - 1 };
}
```

```jsx
import React from 'react';
import { OverProvider, createStore } from 'over-stateful';
import { countReducer } from './store';
import App from './App';

const store = createStore({ count: 0 }, [countReducer]);
export default function Root() {
  return (
    <OverProvider store={store}>
      <App />
    </OverProvider>
  );
}
```

## 👀 Comparison with `React.useState` (examples)

With `React.useState`, you'd have to call `useState` and the individual
dispatcher functions multiple times which is hard to scale and can get messy
real quick as the complexity of your component increases. For example:

```jsx
import React, { useState, useEffect } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('M');
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    (async function() {
      const usersData = await getUsers();
      setUsers(usersData);
      setIsFetched(true);
    })();
  }, []);
}
```

Meanwhile, with `useMultiState`, all you need is a state object, and you can
update as many properties as you want at once like:

```jsx
function Form() {
  const [{ firstName, lastName }, setState, setters] = useMultiState({
    firstName: '',
    lastName: '',
  });

  console.log(setState, setters);
  //=> { setState: 𝑓 }, { setFirstName: 𝑓, setLastName: 𝑓 }

  return (
    <>
      <form
        onSubmit={event => {
          const { elements } = event.target;
          setState({
            firstName: elements.firstName,
            lastName: elements.lastName,
          });
        }}
      >
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <button type="submit">Submit</button>
      </form>

      <h2>
        My full name is {firstName} {lastName}
      </h2>
    </>
  );
}
```

## 💡 More examples

If you prefer dedicated dispatcher functions instead, `useMultiState` supports
that too. Each time you add a property to the state object, a new setter based
on the property name is composed and attached to the `setters` object. So if you
like to destructure, you can easily create variables for your state and setters
without worrying about defining them in any particular order, contrary to
`React.useState`. For instance:

```jsx
function Title() {
  const [{ title, lesson }, , { setTitle, setLesson }] = useMultiState({
    title: 'Unicorns',
    lesson: {},
    assignments: null,
    archives: [],
    showModal: false,
  });

  const updateTitle = title => setTitle('Title: ' + title);
  console.log(title, setLesson);
  //=> "Unicorns", 𝑓 setLesson()

  return <h1>{title}</h1>;
}
```

**Notice how the second element (`setState`) is ommitted in the above example.**

Better still, you can consume the properties directly from the state and setters
object, like so:

```jsx
function Title() {
  const [state, , setters] = useMultiState({
    title: '',
    lesson: {},
    assignments: null,
    archives: [],
    showModal: false,
  });

  const updateTitle = title => setters.setTitle('Title: ' + title);
  console.log(state, setters);
  //=> { title, ... }, { setTitle: 𝑓, ... }

  return <h1>{state.title}</h1>;
}
```

Or... destructure some properties and accumulate the rest into _state_ and
_setters_ objects:

```jsx
function Title() {
  const [
    { title, lesson, ...state },
    setState,
    { setTitle, ...setters },
  ] = useMultiState({
    title: '',
    lesson: {},
    assignments: null,
    archives: [],
    showModal: false,
  });
  console.log(state, setters);
  //=> { assignments, ... }, { setAssignments: 𝑓, ... }

  return <h1>{title}</h1>;
}
```

✨

## 🤝 License

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41 / codewonders](https://github.com/adenekan41) >
> &nbsp;&middot;&nbsp;
