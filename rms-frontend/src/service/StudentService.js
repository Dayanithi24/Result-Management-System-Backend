import axios from 'axios'
import { useParams } from 'react-router-dom';

const REST_API_BASE_URL='http://localhost:8080/api/student';

export const listStudents = ()=> axios.get(REST_API_BASE_URL);

export const createStudent = (student) => axios.post(REST_API_BASE_URL,student);

export const getStudent = (studentId) => axios.get(REST_API_BASE_URL+'/id/'+studentId)

export const getStudentByRoll = (rollno) => axios.get(REST_API_BASE_URL+'/rollno/'+rollno)

export const updateStudent = (studentId,student) => axios.put(REST_API_BASE_URL+'/'+studentId,student)

export const deleteStudent = (studentId) => axios.delete(REST_API_BASE_URL+'/'+studentId)