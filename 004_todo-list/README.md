# Form Submission in React: Controlled vs Uncontrolled Components

This document explains the behavior of **form submission** in React, highlighting the differences between **controlled** and **uncontrolled** components.

## **Uncontrolled Components**

- **Definition**: Form elements where React does not manage the value. The DOM controls the value.
- **On Submit**:
  - The browser handles form submission.
  - The query string is created using the `name` and `value` of the form inputs from the **DOM**.
  - The page reloads and reflects the form data in the URL.
- **Key Behavior**: React does **not** manage the input value; the page reloads, and form values are taken directly from the DOM.

## **Controlled Components**

- **Definition**: Form elements where React manages the value through the component’s state.
- **On Submit**:
  - The `handleSubmit` function is called.
  - **e.preventDefault()** is used to prevent the default form behavior (page reload).
  - The form data is handled by React's state, and the query string is constructed using the react's state values.
- **Key Behavior**: React manages the form data, and no page reload occurs if `e.preventDefault()` is called. Otherwise, the page reloads and the form data is sent in the URL.

## **Key Differences**

| **Feature**                   | **Uncontrolled Components**                     | **Controlled Components**                                                  |
| ----------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| **Form Value Management**     | Managed by the DOM                              | Managed by React state                                                     |
| **On Form Submit**            | Browser constructs query string from DOM values | React’s `handleSubmit` function is triggered                               |
| **Form Data in Query String** | Based on input DOM values                       | Based on React state values                                                |
| **Page Reload**               | Page reloads, resetting the component           | No reload **if `e.preventDefault()` is used**; otherwise, the page reloads |
| **React Involvement**         | React does not manage form input values         | React manages and updates form input values                                |

## **Conclusion**

- **Uncontrolled Components**: Use the browser’s default behavior for constructing query strings, causing a page reload.
- **Controlled Components**: React manages form input values through state, preventing page reloads **only if** `e.preventDefault()` is used in the `handleSubmit` function; otherwise, the form submits and reloads the page.

Use **controlled components** for more flexible and maintainable form handling in React applications.
