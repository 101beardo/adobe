import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditPost from '../components/EditPost'
import EditUser from '../components/EditUser'
import ViewUser from '../components/ViewUser'
import HomePage from './HomePage'
import PostAnalytics from './PostAnalytics'
import PostForm from './PostForm'
import PostList from './PostList'
import UserAnalytics from './UserAnalytics'
import UserForm from './UserForm'
import UserList from './UserList'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/userform' element={<UserForm/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/user/:id/edit' element={<EditUser/>}/>
        <Route path='/user/:id' element={<ViewUser/>}/>

        <Route path='/postform' element={<PostForm/>}/>
        <Route path='/postlist' element={<PostList/>}/>
        <Route path='/post/:id/edit' element={<EditPost/>}/>
        

        <Route path='/useranalytics' element={<UserAnalytics/>}/>
        <Route path='/postanalytics' element={<PostAnalytics/>}/>
    </Routes>
  )
}

export default MainRoutes
