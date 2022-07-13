# Redux
** NOTES **

In this demo application I provide an example of a react application utilizing Redux and the Redux Toolkit and left notes about the core concepts of Redux throughout the implementation. First, establishing a provider and laying out a basic react redux example using only React Redux and its tools (useSelector, useDispatch, Reducer) and how it works with class based componenets. Then, implementing the Redux Toolkit, which gives you access to state slices(createSlice), configureStore (where you can combine multiple reducers into one), and the ability to write cleaner state code that looks mutable (and more straight forward) but isnt actually mutable. This is because the toolkit takes the changes and does the work of recreating the state object to contain not only your changed data but also the previous state data for the values that were not changed. This ensures that you return a complete new state object to replace the current state which is exactly what React wants. 

# Going Step by Step
* On the main branch I set up the bare bones version of React Redux
* On the usingReduxToolkit branch I set up the toolkit implementation. 
* The main branch currently reflects the most recent updates which is using Redux Toolkit 

There are notes for both approaches 

# Code Samples
** store/counter.js **
![image](https://user-images.githubusercontent.com/87290877/178641251-3076e988-e5ff-4bb5-b4eb-2ae033ebea7d.png)


** store/index.js ** 
![image](https://user-images.githubusercontent.com/87290877/178641298-65bb380a-8f2a-4635-adb2-33baa4d1ba40.png)

** components/Counter.js **
![image](https://user-images.githubusercontent.com/87290877/178641511-82984c53-9831-42a5-b7d3-584887ca71d2.png)


# Installation 
You can copy this repository and install the packages with npm i to use this application with npm start and look through the notes to help clarify processes.
