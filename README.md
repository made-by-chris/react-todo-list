# react-todo-list - Extended CRUD functionalities in our To-Do App

Having learned the basics of CRUD operations by adding items to our To-Do list,
it's time to take things a notch up. In this lesson, we will focus on the
additional CRUD operations: Update and Delete. By the end of this, you'll be
able to not only add tasks but also mark them as complete, update their
descriptions, and remove them.

### Clone the Repository (or simply switch to the `crud-2-start` branch in your existing repo)

```bash
git clone https://github.com/made-by-chris/react-todo-list.git react-todo-list-crud-2
cd react-todo-list-crud-2
git checkout -b crud-2-start
npm install
```

### Start the Development Server

```bash
npm run dev
```

## Project Structure

Just a refresher, here are the main files you'll be working with:

- `src/components/`: Contains all the UI components for our To-Do App.
  - `TodoList.jsx`: Displays the list of to-dos.
  - `TodoItem.jsx`: Represents an individual to-do item with added
    functionalities.
  - `AddTodoForm.jsx`: A form to add new to-dos.
- `src/App.jsx`: The main application component where state and main handlers
  are managed.

## Tasks

**1. Enhance CRUD Operations:**

Let's walk through the process of enhancing our to-do list.

- **Step 1: Delete a Todo**
  - **`App.jsx`:** Create a function named `deleteTodo` that will accept a
    todo's id and filter it out from `todoListItems`.
  - **`TodoList.jsx`:** Pass down the `deleteTodo` function to each `TodoItem`
    as a prop.
  - **`TodoItem.jsx`:** Add a "Delete" button next to each todo. When clicked,
    this button should call the `deleteTodo` function, passing the todo's id.

- **Step 2: Toggle Todo Completion**
  - **`App.jsx`:** Implement a function called `toggleCompletion` that toggles a
    todo's completion status. (it should take in the todo's id as a parameter)
  - **`TodoList.jsx`:** Pass down the `toggleCompletion` function to each
    `TodoItem`.
  - **`TodoItem.jsx`:** Introduce a checkbox to represent the completion status
    of each todo. When toggled, this checkbox should call the `toggleCompletion`
    function. (passing the todo's id)

- **Step 3: Edit Todo Text**
  - **`App.jsx`:** Develop a function named `updateTodoText` that will update a
    todo's text based on its id. ( it should take in the id and the new text as
    parameters)
  - **`TodoList.jsx`:** Pass the `updateTodoText` function down to each
    `TodoItem`.
  - **`TodoItem.jsx`:** Allow users to edit the text of a todo. Once the edit is
    finalized, call the `updateTodoText` function with the todo's id and the new
    text.

**2. Bonus - Enhance Tailwind Styles**:

- Adjust styles to visually distinguish completed todos from the others.
- Style the delete and edit functionalities for an improved UX.
- Perhaps include animations or transitions when a todo is deleted or its status
  is toggled?

## Troubleshooting

If you run into any roadblocks, don't get discouraged. Check out the
`crud-2-solution` branch for a fully worked-out implementation and see how it
compares to your effort.

## Helpful Resources

- [React Event Handling](https://react.dev/learn/responding-to-events)
- [Conditional Rendering in React](https://react.dev/learn/conditional-rendering)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
