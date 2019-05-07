## Running the Application

#### Clone the Repository
To run this sample application locally, clone this git repository to your local environment.

```
git clone https://github.com/pjliddy/react-assessment.git
```

#### Install Packages
Navigate to the cloned project directory on your local environment and install the requried npm packages.

```
cd react-assessment
npm install
```

#### Launch the Development Server
Once the required npm packages have been installed, launch the development server.

```
npm start
```

#### View the Application
The `npm start` script will launch the application in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Application Structure

#### App

`App` is a class-based component and the sole element rendered by the `index.js` file. `App` stores the application data in it's state property, including:

*   an array of toDo items,
*   the total number of toDo items,
*   the number of items left to do,
*   and a flag to track when the `NewItem` form should be shown.

`App` also contains event handler functions to:
*   toggle visibility of the `NewItem` form,
*   create and delete toDo items,
*   and toggle the checked state of items in the to do list.

The render function in `App` displays the `PageHeader` and `ToDoList` components as well as conditionally displaying the `NewItem` form component when the user clicks the "New Item" button.

#### PageHeader

`PageHeader` is a function-based component that is positioned at the top of the page and displays:
*   the number of items in the toDo list,
*   the number of items remaining unchecked,
*   and the "New Item" button.

`PageHeader` is also passed state properties for the `showItemForm` flag to disable the "New Item
 button and the `onShowItemForm` callback function to assign as the `onClick` handler for the "New Item" button.

#### NewItem

`NewItem` is a class-based component that is displayed conditionally, based on the `showItemForm` property in the application state. It contains a set of controlled inputs for the toDo item's title, due date, and description, along with "Create" and "Cancel" buttons.

Event handlers for `onSubmit` and `onCancel` are passed into `NewItem` as properties called when the corresponding buttons are clicked. The component's `onFormSubmit` function also validates that there is some value in the title field before calling the `onSubmit` callback and returning an `item` object created using the form data.

#### ToDoList

`ToDoList` is a functional component that maps the array of `items` in the application state to a list of `ToDoItem` components. The `ToDoList` also passes through callback functions for `onToggleItem` and `onDeleteItem` from the `App` component to the `ToDoItem` component.

#### ToDoItem

`ToDoItem` is a class-based component that renders the data for individual items and handles click events to excute callbacks for toggling the `checked` property of the item or to delete the item from the `items` array in the application state.

## Design/Build Process

This application was designed and built iteratively:

1.  A bootstrapped application was created using [Create React App](https://github.com/facebook/create-react-app)
1.  The boilerplate code in the application's `/src` directory was replaced with static UI components and basic styling was defined using CSS.
1.  Functionality was added to create a new toDo item and store it in the list of items in the application's state.
1.  State data was passed to the `ToDoList` of `ToDoItem` components and the components were refactored to render themselves with real data.
1.  Delete item and toggle checkbox functionality were added to the `ToDoItem` component.
1.  Validation was added to the `NewItem` form so that every item has a required title.
1.  Application styling was refactored from CSS to use SCSS.
1.  Source files were cleaned up and fully commented.

The details of this design/build flow can be found in the [list of commits for this project](https://github.com/pjliddy/react-assessment/commits/master).

## Styling

This application uses [Semantic UI](https://semantic-ui.com/) for its base styling. The application's `/public/index.html` file links to the minified production version of `semantic.min.css` on the CloudFlare CDN.

Custom styling for the application is stored in separate SCSS files for each component with a parital `_variables.scss` file to store global styling values including fonts, colors, breakpoints, and spacing values.

## Next Steps

The next steps that can be taken in developing this sample application include:
*   Repurposing the `NewItem` form component to make existing `ToDoItems` editable
*   Updating styling to use the [Semantic UI React](https://react.semantic-ui.com/) package and remove link to static Semantic UI CSS file in `index.html`
*   Refactoring styles to use [React CSS Modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
