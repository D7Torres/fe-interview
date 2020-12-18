## Cleo Frontend Interview - Bills

### Interviewee notes

- The test took me 4 or 5 hours. The tasks were simple but setting up the project was very time consuming: Eslint, Prettier, Typescript, Redux, and make it all work together well... There was some issues that I had to solve specially around Typescript, and I'm not convinced with the solution, I guess next time I'll start a CRA app from scratch to have Typescript properly configured.
- For a better experience reviewing this test, I advise going commit by commit.
- I used typescript only in the Tabs component, as it is the first time and I’m not sure I have the IDE configured to use it in the best way, I gave it a try but did not use it for the rest to speed up.
- I TDDed all the components, but again, to speed up I drop the tests (I wanna cry) for the rest of the work.
- In the real world I would have used reselect for selectors to leverage memoization, instead of getting what I need from the store in the containers.
- The tabs style could look better if I removed the outline, but is recommended to leave it there for accessibility. Same way for the bill names, which are clickable. Thanks to that, a keyboard user can easily navigate between tabs and open/close bills just with TAB, SHIFT and ENTER
- The Tabs component aims to be quite reusable and robust, you just need to pass a list of names for the tabs (still rendering some defaults if not all of them are passed) and to pass any children and will create a tab for each one.
- I tried using the icons as I thought it would look cool, but most of the icon links are broken :(
- I ran out of time + the PATCH was not working with json-server in Mac. Issue here:
  [Doesn’t update on changes to DB? · Issue #710 · typicode/json-server · GitHub](https://github.com/typicode/json-server/issues/710)
- Other stuff I’d do with more time
  - add error treatment for fetching
  - add loading animation for fetching
  - Complete the remaining tasks, which are easy, but solving the PATCH problem could be a rabbit hole

#### How to run the production build

- `yarn build`
- The API server still needs to be run manually: `yarn api`
- `serve -s build`. If `serve` is not installed: `yarn global add serve`

### Get Started

1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task

1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes

- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting
