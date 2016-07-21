# coding-challenge

## How To Run
```
$ npm i
$ npm start
```

### Server & Watch Task
```
$ npm run start:dev
```
Then visit `localhost:3000`.

## Tech Stack
This app uses react to do basic template updating based on user input.
It also uses babel and webpack for transpilation and compilation of javascript.

## Roadmap
This app is clearly unfinished. To really move forward with it, the following would be ideal.

1. Add Redux
    The project currently uses callback functions as a method of communication between components. Unfortunately, this doesn't scale well over time. Redux would do a lot to smooth out these issues and make scaling a breeze.

2. Enhance options for the users
    Right now, a user can only edit the existing markup. Ideally they would be able to add more sections / images / etc.

3. Enhance types of elements to edit
    Right now a user can only edit the text. Ideally they'd be able to edit all kinds of content including but not limited to images, videos, etc.

4. Clean up styles
    The method I am using to give an indication of what the user has clicked to edit is purely in scss. Ideally the selected state would persist, as well as not just be a selection of * from any given element.


### Further reading
[`Redux`](https://github.com/gaeron/redux)
[`Babel`](https://github.com/babel/babel)
[`Webpack`](https://github.com/webpack)
[`React-Quill`](https://github.com/zenoamaro/react-quill)
