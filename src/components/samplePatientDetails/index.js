
import  { Component } from 'react'
import axios from 'axios'

class SamplePatient extends Component {
    state = {name:{},dob:'',gender:'',pacemaker:'',icd:''}

    onChangeLastName = (e)=>{
        const {name} = this.state
        
        this.setState({
            name:{...name,lastName:e.target.value}
        })
    }

    onChangeFirstName =(e)=>{
        const {name} = this.state
        this.setState({
            name:{...name,firstName:e.target.value}
        })
    }

    onChangeMiddleName =(e)=>{
        const {name} = this.state
        this.setState({
            name:{...name,middleName:e.target.value}
        })
    }


    onChangeDate = (e)=>{
        console.log('date',e.target.value)
        this.setState({
            dob:e.target.value
        })
    }

    onChangeGender = (e)=>{
        this.setState({
            gender:e.target.value
        })
    }

    onChagePacemaker =(e)=>{
        this.setState({
            pacemaker:e.target.value
        })
    }

    onChangeICD = (e)=>{
        this.setState({
            icd:e.target.value
        })
    }

    onSubmitForm = async(e)=>{
        e.preventDefault()
        e.target.reset();
        const {name,dob,gender,pacemaker,icd}= this.state
        const {firstName,lastName,middleName} = name
        const patientDetails ={
            firstName,
            lastName,
            middleName,
            dob,
            gender,
            pacemaker,
            icd

        }


        // const nonIcd = document.getElementById("ICD-N/A")
        // nonIcd.checked =false

        // const yesIcd = document.getElementById('icd-yes')
        // yesIcd.checked = false

        // const noIcd  = document.getElementById('icd-No')
        // noIcd.checked = false


        const url = 'http://localhost:3000/api/auth/register'
        try{
            const response = await axios.post(url,patientDetails,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log('response',response)
            
        }
        catch(e){
            console.log("Error after submitting form")
        }

    }


  render() {
    return (
        <form className="patient-details-container"  onSubmit={this.onSubmitForm}>
        <h1 className="patient-details-heading">Enter Patient info</h1>
       <div className="patient-form-container">
        <div className="names-container">
            <div className="individual-names-container">
                <label for='last-name' className="names-label">Last Name<sup>*</sup></label>
                <input required id='last-name' type='text' placeholder="Last Name*"  className="names-input" onChange={this.onChangeLastName}/>
            </div>
            <div  className="individual-names-container">
                <label for='first-name'  className="names-label">First Name<sup>*</sup></label>
                <input required id="first-name" type='text' placeholder="First Name*" className="names-input" onChange={this.onChangeFirstName}/>
            </div>
            <div  className="individual-names-container">
                <label for='middle-name'  className="names-label">Middle Name</label>
                <input id='middle-name' type='text' placeholder="Middle Name"  className="names-input" onChange={this.onChangeMiddleName}/>
            </div>

            </div>
        <div className="date-container">
            <label className="names-label" for='date-of-birth'>Date of Birth<sup>*</sup></label>
            <input required id="date-of-birth" type='date' className="names-input" onChange={this.onChangeDate}/>
        </div>

        <div className="gender-pacemaker-icd-container">
            <div className="gender-container">
                <label required className="names-label">Gender<sup>*</sup></label>
                <div className="individual-gender-container">
                    <input required id='male' type='radio' name='gender' value="Male" onChange={this.onChangeGender}/>
                    <label for='male' >Male</label>
                </div>
                <div  className="individual-gender-container">
                    <input required id='female' type='radio' name='gender' value="Female"  onChange={this.onChangeGender}/>
                    <label for='female' >Female</label>
                </div>
            </div>

            <div className="pacemaker-container">
                <label  className="names-label">Has Pacemaker<sup>*</sup></label>
                <div className="radio-buttons-container">
                <div>
                    <input value='N/A' name='pacemaker' id='N/A' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label required for='N/A' className="">N/A</label>
                </div>
                <div>
                    <input value='yes' required name='pacemaker' id='yes' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label for='yes' className="">Yes</label>
                </div>
                <div>
                    <input value='no' required name='pacemaker' id='No' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label for='No' className="">No</label>
                </div>
                </div>
            </div>

            <div className="ICD-container">
                <label required className="names-label">Has ICD<sup>*</sup></label>
                <div className="radio-buttons-container">
                <div>
                    <input required name='icd' id='ICD-N/A' type='radio' className="" value='N/A' onChange={this.onChangeICD}/>
                    <label for='ICD-N/A' className="">N/A</label>
                </div>
                <div>
                    <input required name='icd' id='icd-yes' type='radio' className="" value='yes' onChange={this.onChangeICD}/>
                    <label for='icd-yes' className="">Yes</label>
                </div><div>
                    <input required name='icd' id='icd-No' type='radio' className="" value='no' onChange={this.onChangeICD}/>
                    <label for='icd-No' className="">No</label>
                </div>
                </div>
            </div>


        </div>
        </div>
        <button type='submit'>Submit</button>
        
        </form>
    )
  }
}

export default SamplePatient