# Simple social media platform

This is Readme file of a simple social media platform consisting of a backend API and a frontend UI, and analytics pages. The platform also supports creating, reading, updating, and deleting operations for user profiles and posts. In addition, users can "like" and "unlike" posts. The analytics pages displays insights on user engagement and content popularity.

Use the Navigation bar in the app to navigate between the main application pages and the analytics pages.

Axios library is used in this project to make HTTP requests to the API endpoints.

Most of the errors are gracefully handled and users are constantly informed of the status of their requests through loading indicators, success messages, and error messages.

Styling to the frontend UI is done using CSS framework Chakra UI


 <h1>Entirely responsive website</h1>
 <h2>Netlify Link</h2>https://stirring-biscochitos-e7ab86.netlify.app//<br/>
 
Working Feautres :-
- Entirely responsive Pages.
- UserForm: A form for creating and updating user profiles.
- PostForm: A form for creating and updating posts.
- UserList: A list of users, with options to view, edit, and delete users.
- PostList: A list of posts, with options to view, edit, delete, like, and unlike posts.
- PostAnalytics: A page displaying post analytics, such as the total number of posts and the top 5 most liked posts.
- Implement navigation between the main application pages and the analytics pages.


Tech Stack :-
- React
- MongoDB
- Nodemon
- Node JS
- Chakra UI
- Javascript
- External Css
- For backend-server deployment Cyclic service is used.
- For Front-end deployment Netlify service is used.


Steps to start :-

For front-end
- npm run start
Now site is infront of you

For Backend
-npm run node index.js (to run the server)
or we can use more optimised approach of using node package nodemon and adding the scirpt tag in package.json file
-add scirpt "server":"nodemon index.js"
-npm run server to start the server and now nodemon will take care of automatically restarting the server with any further changes.


Team Member/s :-
- Tarun Sharma


<h4>HOMEPAGE :-</h4>
Here is the homepage which is entirely responsive and is made by using Chakra UI

![image](https://user-images.githubusercontent.com/76995063/230818784-6cd00b64-6edf-4e63-aea4-62895dac5ec1.png)



<h4>Users Page :-</h4>
Here is the Users page which is entirely responsive, made by using Chakra UI and is having two tabs adjacent to it.

![image](https://user-images.githubusercontent.com/76995063/230818876-ff0c473e-d0d9-47da-a4e6-f2ce9aebf871.png)

We can create new Users or edit the user if we have the id os the user and if we don't have the id of the user we can find it in the All Users Section

![image](https://user-images.githubusercontent.com/76995063/230818995-e96fae37-d421-4d1d-b888-6a70e1b169de.png)




<h4>All Users Page :-</h4>
Here is the All Users page which is entirely responsive, made by using Chakra UI and with loading indicator.

![image](https://user-images.githubusercontent.com/76995063/230819145-593b3ca2-ebc9-44bc-b47f-29964cc36907.png)

Further details of all the users can we viewd, edited and deleted from here.
![image](https://user-images.githubusercontent.com/76995063/230819299-36bb55cc-2673-4ac6-a310-492752d454d4.png)

This how we can view every detail of any user.
![image](https://user-images.githubusercontent.com/76995063/230819354-0bc51cb9-6b52-4ee3-a0e2-60376312f7de.png)

Here we can edit the name, bio or both.
![image](https://user-images.githubusercontent.com/76995063/230819436-44da8ea3-022b-47e3-bb0e-bac73311f47f.png)




<h4>PostsForm Page :-</h4>
Here is the Posts Form page which is entirely responsive, made by using Chakra UI and with error handling features.

![image](https://user-images.githubusercontent.com/76995063/230819490-60d5ef9a-5a38-4f6f-b3a9-eca172374995.png)

In the adjacent tabs we edit the content of the post we have its ID.
![image](https://user-images.githubusercontent.com/76995063/230819643-91f2c3a8-c642-44c3-a77b-5d81d7608b3b.png)
 If we don't have the ID of the post we can move futher from navigation bar to All Posts section to find further details of the post.

<h4>All Posts Page :-</h4>

This page shows user all the posts which are available in the database and user can further Like, unlike, Edit or delete the post from here.
Here we can see the ID of the post, ID of thw user who posted this post and the content of the post and again its entirely responsive.
![image](https://user-images.githubusercontent.com/76995063/230819831-862e0e5d-447b-4d1d-aeb1-760f2f8ac5bf.png)


<h4>User Analytics Page :-</h4>

Moving further in the navigation bar we can see the user analytics page where we can see the total number of users and the top 5 users who are most active on the basis of number of posts they have in post coolection from one to many relation by using foreign key.
![image](https://user-images.githubusercontent.com/76995063/230820467-c3e19fcd-3fd8-4e76-b9a7-4eb9df565aa8.png)

Here  we can see the post count and on the basis of that we are retriving the data from database in a reverse order to determine who is having maximum number of post or in short most active user.



<h4>Post Analytics Page :-</h4>

Moving further and the last page of our navigation bar we have post analytics page where we can see the total number of posts so far and top 5 most liked posts of all time by reverse sorting the data on the basis on likes.

![image](https://user-images.githubusercontent.com/76995063/230820667-de3fa94d-56aa-4935-a372-64d1f4f54726.png)





