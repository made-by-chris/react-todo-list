# react-todo-list - Implementing Search and Clear

we will add a search bar to filter through the tasks and a button to clear all
completed items.

### Clone the Repository (or simply switch to the `crud-3-start` branch in your existing repo)

```bash
git clone https://github.com/made-by-chris/react-todo-list.git react-todo-list-crud-3
cd react-todo-list-crud-3
git checkout -b
crud-extended-start 
npm install
```

### Start the Development Server

```bash
npm run dev
```

## Tasks

**1. Extend the CRUD Operations:**

- **Step 1: Make a new component called `SearchBar`**
  - **`SearchBar.jsx`:** Implement a search bar that takes has an input field
    and a button.
    - its value should come from `props.filterInput`
    - when the user types in the search element (onChange event), you should
      call `props.setFilterInput` with the current value of the input field.

- **Step 2: Add a Search Bar to Filter To-Dos**
  - **`App.jsx`:** Implement `filterInput` with useState to hold the current
    search term.
  - pass `filterInput` and `setFilterInput` to the `SearchBar` component.
  - make an arrow function called filteredTodos that returns a filtered list of
    to-dos based on the current search term. Use the `filter` method on
    todoListItems, to compare the `todoItem`'s `text` to the `filterInput`.
  - pass the result of `filteredTodos` to the `TodoList` component instead of
    `todoListItems`. You should now see the items automatically filtering based
    on matching text!

- **Step 3: Clear All Completed To-Dos**
  - **`App.jsx`:** Add a function named `clearCompleted` that filters out all
    completed items from `todoListItems`.
  - Implement a "Clear Completed" button. When clicked, it should call the
    `clearCompleted` function.

**2. Bonus - Enhance Styles with Tailwind**:

- Style the search bar elegantly.
- Style the "Clear Completed" button to make it stand out but not overshadow
  other elements.

## Troubleshooting

If you face any challenges or get stuck, no worries! You can always refer to the
`crud-3-solution` branch to check out the fully-implemented features.

## Helpful Resources

- [Handling Input with React](https://react.dev/learn/forms-in-react)
- [React Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
