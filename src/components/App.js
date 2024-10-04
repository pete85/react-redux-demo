import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <div className="tw-flex tw-flex-col tw-flex-auto">
            <Header/>
            <div className="tw-flex tw-flex-col tw-flex-auto page-container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/courses" element={<CoursesPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/course/:slug?" element={<ManageCoursePage/>}/>
                    <Route element={<PageNotFound/>}/>
                </Routes>
                <ToastContainer autoClose={3000} hideProgressBar theme="dark" />
            </div>
        </div>
    );
}
