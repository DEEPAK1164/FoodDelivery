![Screenshot (10932)](https://user-images.githubusercontent.com/85310059/234217369-b76ee776-7e67-4276-b9ab-487eafe97125.png)
![Screenshot (10933)](https://user-images.githubusercontent.com/85310059/234217410-f6b8a93a-2f86-4400-a793-c5cb5e49a327.png)
![Screenshot (10934)](https://user-images.githubusercontent.com/85310059/234217423-86670b24-47bb-4fe8-9eec-f08de91c3777.png)
![Screenshot (10935)](https://user-images.githubusercontent.com/85310059/234217435-4e50e268-7338-45aa-814e-4d24f1848c08.png)
![Screenshot (10936)](https://user-images.githubusercontent.com/85310059/234217460-2f3b2f60-2e1f-4a75-ab40-75d3404ca2f8.png)
![Screenshot (10943)](https://user-images.githubusercontent.com/85310059/234217821-e0b7e6fb-ffdd-4eab-8af5-869e5248b227.png)
![Screenshot (10946)](https://user-images.githubusercontent.com/85310059/234217844-c3106dcb-54ed-459c-b4a3-fcf5a97439d8.png)
![Screenshot (10958)](https://user-images.githubusercontent.com/85310059/234217944-139d43c9-7841-402d-a7bc-f27d23a920b5.png)
![Screenshot (10959)](https://user-images.githubusercontent.com/85310059/234217955-88cfaf82-20d3-48f7-b712-57502794fbfa.png)
![Screenshot (10961)](https://user-images.githubusercontent.com/85310059/234217980-be9e6746-b265-426e-a1e0-7f753b82f062.png)
![Screenshot (10962)](https://user-images.githubusercontent.com/85310059/234217992-54b04d4b-e035-43c8-ad4e-77175b491660.png)

Introduction:
This eCommerce food delivery app is built using React.js, Parcel.js, JavaScript, CSS3, HTML5, and React hooks.
It allows users to order food from various restaurants and get it delivered to their location.
The app has been optimized for production build using Parcel.js and browserlist to ensure it works seamlessly across different devices and browsers.

Installation:
Clone the repository to your local machine.
Run npm install to install all the required dependencies.
Run npm start to start the development server.
Run npm run build to create a production build of the app.

Features:
The app allows users to browse through different restaurants and their menus.
Users can add items to their cart and place an order.
Users can track the status of their orders.
The app supports multiple payment options.
Users can view their order history and reorder items from their previous orders.
The app uses React hooks like useState and useEffect to manage state and side effects.

Technologies Used:
React.js: A JavaScript library for building user interfaces.
Parcel.js: A fast, zero-configuration web application bundler.
JavaScript: A programming language used for creating interactive web applications.
CSS3: A stylesheet language used for styling web pages.
HTML5: A markup language used for creating web pages.
React hooks: A feature in React that allows functional components to use state and side effects.

APIs Used:
Swiggy API: Used to fetch data about restaurants and their menus.
GitHub API: Used to fetch data about a user's repositories.
Implementation Details:
The app uses the useEffect hook to fetch data from Swiggy API and GitHub API.
When the app loads, useEffect is used to fetch data about nearby restaurants and their menus from Swiggy API.
When the user enters their GitHub username in the app, useEffect is used to fetch data about their public repositories from GitHub API.
The fetched data is stored in state variables using the useState hook, which triggers a re-render of the component to display the data on the page.

Contributing:
Contributions to this app are welcome.
If you find a bug or have a suggestion, please open an issue on the repository.
If you would like to contribute code, please fork the repository and create a pull request.
