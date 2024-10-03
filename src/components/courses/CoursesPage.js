import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../state/actions/courseActions";
import * as authorActions from "../../state/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import Spinner from "../common/Spinner";

class CoursesPage extends React.Component {

    state = {
        redirectToAddCoursePage: false
    };

    componentDidMount() {
        const {courses, authors, actions} = this.props;

        if (courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        }

        if (authors.length === 0) {
            actions.loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }
    }

    handleDeleteCourse = async course => {
        toast.success("Course deleted");
        try {
            await this.props.actions.deleteCourse(course);
        } catch (error) {
            toast.error("Delete failed. " + error.message, {autoClose: false});
        }
    };

    render() {
        return (
            <>
                {this.state.redirectToAddCoursePage && <Navigate to="/course"/>}
                {this.props.loading ? (
                    <div className="spinner-container tw-flex tw-flex-auto tw-flex-col">
                        <Spinner/>
                    </div>
                ) : (
                    <div>
                        <div className="courses-header">
                            <h2>Courses</h2>
                            <button className="app-btn app-btn-primary"
                                    onClick={() => this.setState({redirectToAddCoursePage: true})}>
                                Add Course
                            </button>
                        </div>

                        <CourseList
                            onDeleteClick={this.handleDeleteCourse}
                            courses={this.props.courses}
                        />
                    </div>
                )}
            </>
        );
    }
}

CoursesPage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        courses:
            state.authors.length === 0
                ? []
                : state.courses.map(course => {
                    return {
                        ...course,
                        authorName: state.authors.find(a => a.id === course.authorId).name
                    };
                }),
        authors: state.authors,
        loading: state.apiCallsInProgress > 0
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);