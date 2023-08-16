# react-todo-list - A To-Do App with React & Tailwind CSS

This repository walks you through the creation of a modern web application,
helping you understand the intricacies of React component structure, state
management, and styling with Tailwind CSS. Our focus is just on _composition_ of
components in this exercise

## Getting Started

### Clone the Repository

Before you begin, make sure to clone this repository to your local machine.

```bash
git clone https://github.com/made-by-chris/react-todo-list.git
cd react-todo-list
npm install
```

### Start the Development Server

Once all packages are installed, start the development server.

```bash
npm run dev
```

Your app should now be running on
[http://localhost:5173](http://localhost:5173).

## Project Structure

Here's a brief overview of the main files and directories:

- `src/components/`: Contains all the UI components for our To-Do App.
  - `TodoList.jsx`: Displays the list of to-dos.
  - `TodoItem.jsx`: Represents an individual to-do item.
  - `AddTodoForm.jsx`: A form to add new to-dos.
- `src/App.jsx`: The main application component.
- `src/main.jsx`: The entry point for our React application.

See the final UI of the app below:

![Screenshot or mockup of the final app](link-to-image)

## Tasks

- **`AddTodoForm.jsx`:**
  - Create a basic form with a text input and a submit button.
  - Export the `AddTodoForm` component.

- **`App.jsx`:**
  - Import the `AddTodoForm` component.
  - Render the `AddTodoForm` component on the screen. Check it in your browser!

Continue this basic flow of creating and rendering a component in React. Now,
for the list area:

- **`TodoItem.jsx`:**
  - Create a basic HTML list item with a checkbox input, a text input, and a
    delete button.
  - Use basic fake text in the text input for now.
  - Export the `TodoItem` component.

- **`TodoList.jsx`:**
  - Import the `TodoItem` component.
  - Render several `TodoItem`s to simulate a working to-do list.

- **`App.jsx`:**
  - Import the `TodoList` component.
  - Render the `TodoList` component on the screen after the `AddTodoForm`
    component. Check it in your browser!

- **Bonus - Style with Tailwind**:
  - Use Tailwind CSS classes to style your components. Remember, it's all about
    utility-first design!

## Troubleshooting

Check the `components` branch for a working example. Best of luck!

## Helpful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
