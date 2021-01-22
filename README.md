## Employee Directory React 

This employee directory allows users to view the entire employee directory at once and search by first name to gain access ot their information. 

## Links

Deployed Application: 

Link to watch the app: https://drive.google.com/file/d/1N5Jn4c55xs12YuCvKo0jUEdByJZZxa6w/view

## Technologies 
<ul>
    <li>React JS</li>
    <li>Axios</li>
    <li>Bootstrap</li>
<ul>

## Description 

This application was created using React.JS, which allows for more dynamic components by introducing a virutal DOM. To start this project, each area of the website is separated into personalization components that contains one main <div> element. In this application, we have a component for 'Card', 'Col', 'Employee Container', 'SearchForm' and 'Wrapper'.  

The 'Wrapper' component holds the css file that designs the look of the application. 'Card' and 'Col' components hold the formatting, while the 'Search Form' and 'Employee Container' hold the main functionality elements.

The Search Form Components has the basic form and input, but is then connected through the state to the 'Employee Container' component. 

The Employee Container starts by calling the state as the search, from the search form component, and the results, which will come later through the API. Next, the componentDidMount function that asks as a first come to the site function. Here we have it list all the employees from the Random User API, so that when the user logs in, they can see a list of employees right away. 

Second, we have functionst that are connected to changes in the state. The handleInputChange and handleFormSubmit pull from the name entered in the search box as you update the state. This then filters through the Random User API to produce corresponding results. 

Third, a clearSearch function was added so that after finding your specific employee, you can clear the API and look again! Finally, the attempt to add a sort function was added, but the button does not work correctly. 

## Images

<img src='/Employee directory.png>

