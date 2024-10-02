import React from "react";
import {connect} from "react-redux";
import * as courseActions from "../../state/actions/courseActions";
import PropTypes from "prop-types";

// const CoursesPage = () => (
//   <h2>Courses</h2>
// );
//
// export default CoursesPage;

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };

    handleChange = (event) => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.course.title);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save"/>
                {this.props.courses.map(course => (
                    <div key={course.title}>
                        <h4>{course.title}</h4>
                    </div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {}
// }

export default connect(mapStateToProps)(CoursesPage);