import React,{useEffect, useState} from 'react'
import { deleteStudent, listStudents } from '../service/StudentService'
import { useNavigate } from 'react-router-dom'

const ListStudent = () => {
    const navigator=useNavigate();
    const [student,setStudent] = useState([])
    useEffect(()=>{
        getAllStudents()
    },[])
    
    function getAllStudents(){
        listStudents().then((response)=>{setStudent(response.data)}).catch(error =>{console.error(error)})
    }

    function addNewStudent(){
        navigator('/add-student')
    }
    function updateStudent(id){
        navigator(`/edit-student/${id}`)
    }
    function removeStudent(id){
        console.log(id)
        deleteStudent(id).then((response)=>{
            getAllStudents()
            console.log("Deleted Successfully")
        }).catch(error =>{
            console.log(error)
        })
    }
    function exit(){
        navigator("/")
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Students</h2>
        <button className='btn btn-primary mb-2' onClick={addNewStudent}>Add Student </button>
        <button className='btn btn-primary' style={{position:"absolute",right:"120px"}} onClick={exit}>Log Out </button>
      <table className='table table-striped table-bordered text-center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>rollno</th>
                <th>email</th>
                <th>
                
                    <tr className='col-md-12'><th colspan="2">Marks</th>
                    </tr>
                    <tr>
                    <th className='col-md-10'>Subject</th>
                    <th>Grade</th>
                    </tr>
                </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map(student=>
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.rollno}</td>
                    <td>{student.email}</td>
                    <td> {student.marks.map(mark=> <tr> 
                    <td className='col-md-12'>{mark.cname }</td> 
                    <td>{mark.grade }</td> </tr>)}
                    </td>
                    <td><button className='btn btn-info' onClick={()=>updateStudent(student.id)}>Update</button>
                    <button className='btn btn-danger' onClick={()=>removeStudent(student.id)} style={{marginLeft:'20px'}}>Delete</button></td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListStudent
