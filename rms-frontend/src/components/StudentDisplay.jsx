import React,{useState ,useEffect} from 'react'
import { getStudentByRoll } from '../service/StudentService'
import { useParams } from 'react-router-dom'

const StudentDisplay = () => {
    const {rollno}=useParams()
    const [student,setStudent] = useState([])
    useEffect(()=>{
        getStudentByRoll(rollno).then((response)=>{setStudent(response.data)}).catch(error =>{console.error(error)})
    },[])
    console.log(student.marks);
  return (
    <div>
        {/* <button onClick={handle}>Hi</button> */}
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>rollno</th>
                <th>email</th>
                <table>
                    <tr><th colspan="2">Marks</th></tr>
                    <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    </tr>
                </table>
            </tr>
        </thead>
        <tbody>
            {
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.rollno}</td>
                    <td>{student.email}</td>
                    {student.marks && student.marks.map(mark => <tr><td className='col-md-12'>{mark.cname}</td><td>{mark.grade}</td></tr>)}
                </tr>
            }
        </tbody>
      </table>
    </div>
  )
}

export default StudentDisplay
