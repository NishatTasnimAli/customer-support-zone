# Customer Support Zone

This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.

# Additional Information

## What is JSX, and why is it used?

JSX  is a syntax extension for React that allows developers to write HTML-like code in JavaScript. It makes UI code easier to read and understand by combining structure and logic in one place.

## What is the difference between State and Props?

The difference between State and Props is:-

- A state is a built-in object that stores data that can change over time inside a component. When the State changes, the component re-renders automatically.

- Props are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the receiving component.

## What is the useState hook, and how does it work?

- useState is a React Hook that allows functional components to manage state. It returns two values:- The current state value and a function to update that state.

-- Example:-

const [count, setCount] = useState(0);

- count stores the current value, and setCount updates it. When the state changes, React automatically re-renders the component.

## How can you share state between components in React?

State can be shared between components by lifting the state to their common parent component. The parent stores the state and passes it to child components using props. Child components can also receive functions from the parent to update the state.

## How is event handling done in React?

Event handling in React is done using "camelCase" event names and passing functions as event handlers.

-- Example:

<button "onClick" = {handleClick} > Click  </button> 

The "handleClick" function is executed when the button is clicked. React events work similarly to DOM events but use a synthetic event system for better performance and consistency.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




