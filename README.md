# Shopping Cart App

Shopping Cart App is a single page application built using React and Redux. It has two views. First view displays list of products with title, image, price and cta button. 
Clicking the list item shows the second view which gives more information about the item like for example description, price, and remaining stock.
It also gives user an option to add item to the cart, remove item from the cart and update the stock quantity as well as to do checkout. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Setup

Clone, setup, and run the project

- `git clone https://github.com/kdabo/shopping-cart-app.git`
- `cd shopping-cart-app`
- `yarn`
- `yarn start`

Access the project on port `localhost:3000`

## Built With

* [React](https://github.com/facebook/react) - The library used for building user interfaces
* [Redux](https://github.com/reduxjs/redux) - The library for managing application state
* [Yarn](https://maven.apache.org/) - Dependency Management
* [Semantic UI](https://semantic-ui.com/) - Styleguide library
* [Faker](https://github.com/marak/Faker.js/) - Realistic fake data in Node.js and the browser 

#### Reasoning behind the tools

##### 3 reasons why I chose React

There are three reasons why I like to work with React, and have also chose it for this assignment. 
The first one is more generic and it's basically React's community, ecosystem, stability and documentation. 
In my perspective, these are areas where React excels. The second one is technical and it is modularity and reusing
a single components in multiple User Interfaces. and last but not the least, writing React feels like writing JavaScript.


##### 3 reason why I chose Redux
 
 1. Predictable state updates meaning that all data in the application follows the same lifecycle pattern. 
 2. Centralizing the application state. In the case of shopping-cart-app some components 
    had to access the same state but display in different way(list page and detail page).
 3. Persisting the state of the application in the localStorage using browser localStorage API.  

##### Styeguide library

I decided to go for Semantic UI to save time writing CSS, but still delivering consistent and responsive application.

#### Faker

I used Faker.js to generate images for placeholder images. 

#### Architecture

The application consists of actions, containers, components and reducers:

- actions - on certain event action creator gets called and returns an action, action creator passes action to reducer
- reducers - dispatch the action of the same type to container 
- containers - have ability to talk to Redux by binding action creator to dispatch and mapping state to props
- functional components receive it's data through props

##### localStorage 

Since the selected products are not sent to the API, 
the application makes use of localStorage for adding/removing the items in the cart as well as checkout process.

