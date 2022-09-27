# Week 1

## React. Components

### What should be done:

1. Create a separate branch for this task.
2. Use CRA with template --typescript.
3. Set up eslint and prettier so that the project would not build if having errors. Use [configs](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md) [RU]
4. Add React-Router version 6. Add header which shows the current page. Also add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.
5. Draw the following on the main page:
* Search Bar.\
examples:\
https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png \
https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg \
Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.
* Cards. The more details are on the card – the better.\
examples: \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg \
**In the situation when the access to life cycles of a component is needed or there is a necessity of state – use class components. Using hooks is forbidden at this stage.**
6. Add tests for components. Mock LocalStorage. Add test for one card, as well as tests for the list of all cards. You can use either React Testing Library or Enzyme, but only one of them. Preferr React Testing Library.

All logical parts should be set into separate components.
### Score

The task will be checked by the mentor during the first 6 weeks. Create a Pull Request to the branch of the previous task, for mentor's checking (**DO NOT MERGE**).

1. Tests – **4 points**
2. eslint, prettier – **2 points**
3. React App + components and router – **9 points**