import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.BASE_URL + 'courses';

export function getCourses() {
  return fetch(baseUrl)
      .then(handleResponse)
      .catch(handleError);
}

export function saveCourse(course) {
  return fetch(`${baseUrl}/${course._id || ""}`, {
    method: course._id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course)
  })
      .then(handleResponse)
      .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(`${baseUrl}/${courseId}`, { method: "DELETE" })
      .then(handleResponse)
      .catch(handleError);
}
