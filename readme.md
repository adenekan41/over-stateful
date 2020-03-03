![Codewonders](https://i.ibb.co/27nrGK1/overstateful-1.png)

# Over Stateful [![npm](https://badge.fury.io/js/over-stateful.svg)](https://www.npmjs.com/package/over-stateful)

[![NPM](https://nodei.co/npm/over-stateful.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/over-stateful/)

🐺A small state management with less setup and super scalability in your react
app.

<!-- useState, but simplified for complex states in React apps. -->

## ✨ Features

- 😎 Easy to learn
- 📦 ~590b (gzipped)
- 🔥 Easy to scale
- 🙅‍♂️ Zero dependencies
- ✂️ Super-flexible API
- ✅ Fully tested and reliable
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

## Comparison with other state management (examples)

With other state mannagement, setup and learning curve is a lot harder and bent
you'd have to call/read `documentations` over and over again ..... For example:

- Redux state managment
- Easy State
- Mobx e.t.c

Meanwhile, with `over-stateful`, all you need is this, less documentation
required to get you going...

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

`App.js`

```jsx
import React from 'react';
import { useOverState } from 'over-stateful';

const App = () => {
  const [state, dispatch] = useOverState();
  return (
    <>
      {count}
      <button onClick={() => dispatch(addOne())}> +1 </button>
      <button onClick={() => dispatch(minusOne())}> -1 </button>
    </>
  );
};
```

✨

## 🤝 License

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41 / codewonders](https://github.com/adenekan41) >
> &nbsp;&middot;&nbsp;
