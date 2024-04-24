import React, { useEffect, useState } from 'react'
import { createStudent, getStudent, updateStudent } from '../service/StudentService'
import { useNavigate,useParams } from 'react-router-dom'
import MarkInput from './MarkInput'

const EmployeeComponent = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [rollno, setrollno] = useState('')
    const {id} = useParams()

    const [errors,setErrors] = useState({
        name:'',rollno:'',email:''
    })

    const handleName = (e)=> setname(e.target.value)
    const handleRollno = (e)=> setrollno(e.target.value)
    const handleEmail = (e)=> setemail(e.target.value)

    const navigator=useNavigate()
    const [marks, setMarks] = useState([{ subject: '', mark: '' }]); // State to store marks

  // Function to handle adding a new input box
  const addInput = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setMarks([...marks, { cname: '', grade: '' }]);
  };

  // Function to handle removing an input box
  const removeInput = (index) => {
    const updatedMarks = marks.filter((_, i) => i !== index);
    setMarks(updatedMarks);
  };

  // Function to handle input change for subject name
  const handleSubjectChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].cname = event.target.value;
    setMarks(updatedMarks);
  };

  // Function to handle input change for mark
  const handleMarkChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].grade = event.target.value;
    setMarks(updatedMarks);
  };

    useEffect(()=>{
        if(id){
            getStudent(id).then((response)=>{
                setname(response.data.name)
                setrollno(response.data.rollno)
                setemail(response.data.email)   
                setMarks(response.data.marks)   
            }).catch(error =>{
                console.log(error)
            })
        }
    },[id])
    console.log(marks)

    function saveOrUpdateEmployee(e){
        e.preventDefault();
        if(validateForm()){
            if(id){
                const student ={name,rollno,email,marks}
                updateStudent(id,student).then((response)=>{
                    console.log(response.data)
                    navigator('/admin')
                }).catch(error=>{
                    console.log(error)
                })
            }
            else{
                const student ={name,rollno,email,marks}
                
                createStudent(student).then((response)=>{
                    console.log(response.data)
                    navigator('/admin')
                }).catch(error=>{
                    console.log(error)
                })

            }
    }
    }
    const student={name,rollno,email}

    function validateForm(){
        let valid=true
        const errorsCopy= {... errors}
        if(name.trim()){
            errorsCopy.name=''
        }else{
            errorsCopy.name="Name is required"
            valid=false
        }

        if(rollno.trim()){
            errorsCopy.rollno=''
        }else{
            errorsCopy.rollno='Rollno is required'
            valid=false
        }
        
        if(email.trim()){
            errorsCopy.email=''
        }else{
            errorsCopy.email='Email is required'
            valid=false
        }
        setErrors(errorsCopy)
        return valid
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Student</h2>
        }
        else{
            return <h2 className='text-center'>Add Student</h2>
        }
    }

  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body>'>
                    <form>
                        <div className='form-group mb-2'>
                        <label className='form-label'>Name</label>
                        <input type='text' placeholder='Enter the name' name='name' value={name}
                        className={`form-control ${ errors.name ? 'is-invalid':''}`}
                        onChange={handleName}
                        />
                        {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                        <div className='form-group mb-2'>
                        <label className='form-label'>RollNo</label>
                        <input type='text' placeholder='Enter the rollno' name='rollno' value={rollno}
                        className={`form-control ${ errors.rollno ? 'is-invalid':''}`}
                        onChange={handleRollno}
                        />
                        {errors.rollno && <div className='invalid-feedback'>{errors.rollno}</div>}
                        </div>
                        <div className='form-group mb-2'>
                        <label className='form-label'>Email</label>
                        <input type='text' placeholder='Enter the mail' name='email' value={email}
                        className={`form-control ${ errors.email ? 'is-invalid':''}`}
                        onChange={handleEmail}
                        />
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div>
                        <label className='form-label'>Marks</label>

                        <div>
      {/* Render input boxes for each mark */}
      {marks.map((mark, index) => (
        <div key={index} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Subject"
            name='cname'
            value={mark.cname}
            onChange={(event) => handleSubjectChange(index, event)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Grade"
            name='grade'
            value={mark.grade}
            onChange={(event) => handleMarkChange(index, event)}
          />
          <div className="input-group-append">
            {/* Button to remove input box */}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => removeInput(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {/* Button to add new input box */}
      <button className="btn btn-primary" onClick={addInput}>
        Add Mark
      </button>
    </div>
                        </div>
                        <br></br>
                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
