# react-todo-list - A To-Do App with React & Tailwind CSS

This repository builds upon our previous lesson about component composition.
Now, we delve deeper into handling CRUD operations with React. By the end,
you'll be able to Create, Read, Update, and Delete todo items from your list,
all powered by React state!

### Clone the Repository ( you can also just switch to the `crud-start` branch in your existing repo)

```bash
git clone https://github.com/made-by-chris/react-todo-list.git react-todo-list-crud
cd react-todo-list-crud
git checkout -b crud-start
npm install
```

### Start the Development Server

```bash
npm run dev
```

## Project Structure

Here's a brief overview of the main files and directories:

- `src/components/`: Contains all the UI components for our To-Do App.
  - `TodoList.jsx`: Displays the list of to-dos.
  - `TodoItem.jsx`: Represents an individual to-do item.
  - `AddTodoForm.jsx`: A form to add new to-dos.
- `src/App.jsx`: The main application component.
- `src/main.jsx`: The entry point for our React application.

## Tasks

**1. Setting up CRUD Operations:**

We're going to combine what we've learned about CRUD and props. We pass some
data down from the top-level `App` component to the `TodoList` ( and then to the
`TodoItem` component). We also pass down a function to the `AddTodoForm`
component to add new to-dos to the list. We need to implement the following:

- **`App.jsx`:**
  - We will keep the main list of to-dos in a useState here.
  - Make a useState variable called `todoListItems` to store the list of to-dos.
  - Handle CRUD operations at this top-level and pass down relevant props and
    handlers to child components.
  - create a `createTodo` function that adds a new to-do to the list.
  - pass the createTodo function down to the `AddTodoForm` component as a prop.
  - pass the todoListItems down to the `TodoList` component as a prop.

- **`AddTodoForm.jsx`:**
  - Implement state (`useState`) to track the text input value of the form.
  - Make a useState variable called `formInputValue` to store the text input
    value.
  - Add a `handleSubmit` function that pushes calls `props.createTodo` function
    (passed down as a prop) with the current input value.
  - Make sure to prevent the default behavior of form submission to stop the
    page from reloading.

- **`TodoList.jsx`:**
  - Use the list of to-dos (from state) to map and render each `TodoItem`.
  - Pass down the each item's info down to each `TodoItem` component as a prop.

- **`TodoItem.jsx`:**
  - take `props.todo.text` and render it in the component. You should now see
    the list of to-dos rendered on the page! Check it in the browser.

**2. Bonus - Style with Tailwind**:

- style completed todoItems differently from active ones.
- Add transition effects for adding, updating, or deleting to-dos for better UX.

## Troubleshooting

If you're running into issues with setting up CRUD, check the `crud-solution`
branch for a full implementation. Keep up the good work!

## Helpful Resources

- [Prevent Default](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [State and Lifecycle in React](https://react.dev/learn/state-a-components-memory)
- [Handling Events in React](https://react.dev/learn/responding-to-events)
- [Props in React](https://react.dev/learn/passing-props-to-a-component)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
