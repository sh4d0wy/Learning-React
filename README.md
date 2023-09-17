This is a github repo to manage my github assignments on different branches

If you want to see those assignmnets, clone this repo and move to the branches like for chapter 1 go to branch react-1

Here are the questions I will be covering in the assignments


# **React JS Series**

## **Chapter 1 - Introduction to React & Setup**

Assignment 1 : If we delete node_modules. How to run our app again successfully ?

Assignment 2 : How to remove double console.logs from React ? [ it is not needed in real life to remove them, its just an assignment problem ]. [ Hint: Some special Component at top level is of App is causing it ]. We explore more about - why this is needed in later videos.

Special Assignments ==============
Assignment 3 : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

Assignment 4 : Try to build a react app using other toolchains like Vite


## **Chapter 2 - Components - JSX and Props**

Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.

 ```
 resume = {
    experience : [ { year:2012, company:'xyz', role:'something' }],
    education:[ ],
    skills : [ 'react js', 'node js']
    .....
    ...
    }
```
You can choose any simple HTML layout and convert it to React Components

Example Link : [Resume HTML](https://codepen.io/emzarts/pen/OXzmym)

Special Assignments ==============
Assignment 2 : Create a Parent Component called Border which can provide some CSS border to any component nested into it. [Hint : You will need to use children props here]

```
 < Border> 
       < Component > 
 < Border />
```

## Chapter 3 - Conditional Rendering & Lists

**Assignment 1** : Make a simple component which can conditionally render a list with number or alphabets or bullets in HTML for number. e..g. use a prop like layout for this. Also use a prop items for array of items in list.

```
< List layout="numbered" items={items}/> 
< List layout="alpha"  items={items}/> 
< List layout="bullet"   items={items}/>
```