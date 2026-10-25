# User CRUD App

A simple User Management app built with **Vite + React**. You can add, view, edit and delete users. A **Bootstrap Offcanvas** (side panel) is used for the add and edit form.

## Features

- **Create**: add a new user from the side panel.
- **Read**: see all users in a clean table with avatar, role and status.
- **Update**: edit a user in the same side panel.
- **Delete**: remove a user with one click.
- **Role tags**: Developer, Designer, Tester, Manager.
- **Status badges**: Active (green) and Inactive (red).
- **Icons**: on the title and all buttons.

## Tech Used

- **React (Vite)**: fast setup and build tool for the app.
- **Bootstrap**: ready-made styles for layout, table and forms.
- **React-Bootstrap**: gives the Offcanvas component.
- **Bootstrap Icons**: small icons for buttons.

## Getting Started

```bash
# 1. Create the project
npm create vite@latest crud-app -- --template react
cd crud-app

# 2. Install packages
npm install
npm install bootstrap react-bootstrap bootstrap-icons

# 3. Run the app
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
crud-app/
├── src/
│   ├── App.jsx      # all CRUD logic and UI
│   ├── App.css      # custom styles
│   └── main.jsx     # Bootstrap and icon imports
├── package.json
└── README.md
```

- **App.jsx**: holds the user list, the form, and add / edit / delete functions.
- **App.css**: colors, table card, badges and button styles.
- **main.jsx**: loads Bootstrap and icon CSS for the whole app.

## Setup Notes

Add these two lines at the top of `src/main.jsx`:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
```

These load the Bootstrap styles and the icons. Without them the app will look plain.

## How It Works

| Action | What happens |
| ------ | ------------ |
| Add | "Add User" opens the Offcanvas with an empty form. Save adds the user. |
| Edit | The pencil icon opens the Offcanvas with the user's data. Update saves it. |
| Delete | The trash icon removes the user from the list. |

One form is used for both add and edit. If `form.id` exists, it updates. If not, it adds.

## Important

Data is stored in React state only, so it **resets when you refresh** the page.

## Future Improvements

- **Search box**: find users by name or email.
- **Delete confirmation**: ask before deleting.
- **API connection**: use json-server or axios.
- **localStorage**: keep data after refresh.
