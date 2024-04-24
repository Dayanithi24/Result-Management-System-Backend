import React,{useState ,useEffect} from 'react'
import { getStudentByRoll } from '../service/StudentService'
import { useParams,useNavigate } from 'react-router-dom'

const StudentDisplay = () => {
  const navigator=useNavigate()
    const {rollno}=useParams()
    const [student,setStudent] = useState([])
    useEffect(()=>{
        getStudentByRoll(rollno).then((response)=>{
          setStudent(response.data)}).catch(error =>{
            console.error(error)
            navigator('/404')
          })
    },[])
    console.log(student.marks);
    function handle(){
      navigator("/")
    }
  return (
    <>
    <div style={{display:"flex",flexDirection:"row"}}>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card">
            <div className="card-body ">
              <h4 className="card-title text-center" style={{color:"tomato"}}>Student Information</h4>
              <hr/>
              <br/>
              <br/>
                <h2 style={{color:"GrayText"}}>Name</h2>
                <h1 style={{marginLeft:"50px",color:"turquoise"}}>{student.name}</h1>
                <br/>
                <h2 style={{color:"GrayText"}}>Roll</h2>
                <h3 style={{marginLeft:"50px",color:"rosybrown"}}>{student.rollno}</h3>
                <br/>
                <h2 style={{color:"GrayText"}}>Mail</h2>
                <h3 style={{marginLeft:"50px",color:"brown"}}>{student.email}</h3>
                <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='col-md-5' style={{marginRight:"100px",marginTop:"100px"}}>
          <table className='table table-striped table-bordered text-center'>
            <thead className='thead-dark'>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {student.marks && student.marks.map(mark => <tr><td className='col-md-18'>{mark.cname}</td><td>{mark.grade}</td></tr>)}
            </tbody>
          </table>
      </div>
    </div>
      <button className='btn btn-primary btn-lg' style={{position:"absolute",right:"100px"}} onClick={handle}>Back</button></>
  )
}

export default StudentDisplay
