
import './index.css'

import { Component } from 'react'
import axios from 'axios'


class SampleEnroll extends Component{

    state = {clinicName:'',deviceName:"",enrollmentType:''}

    onClickClinicName =(e)=>{
        console.log('clinic name',e.target.value)
        this.setState({
            clinicName:e.target.value
        })
    }

    onChangeDeviceName =(e)=>{
        this.setState({
            deviceName:e.target.value
        })
    }

    onChangeEnrollment =(e)=>{
        this.setState({
            enrollmentType:e.target.value
        })
    }

    onSubmitForm =async(e)=>{
        e.preventDefault()
        const {clinicName,deviceName,enrollmentType} = this.state
        const clinicDetails = {
            clinicName,
            deviceName,
            enrollmentType
        }
        const url='http://localhost:3000/api/auth/register'

        try{

            const response = await axios.post(url,(clinicDetails),{
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
    
    render(){
    
    return (
        <form className="clinic-container" onSubmit={this.onSubmitForm}>
        <div className="individual-clinic-containers">
            <label className="clinics-label" for='clinic'>Select Clinic<sup>*</sup></label>
            <select required name="clinic-details" id="clinic" onChange={this.onClickClinicName}>
            <option value="">--Select Clinic*--</option>
                <option value="Clinic1">Clinic1</option>
                <option value="Clinic2">Clinic2</option>
                <option value="Clinic2">Clinic3</option>
                <option value="Clinic4">Clinic4</option>
            </select>
        </div>
        <div className="individual-clinic-containers">
            <label  className="clinics-label" for='device'>Select Device<sup>*</sup></label>
            <select required name="clinic-details" id="device" onChange={this.onChangeDeviceName}>
            <option value="">--First Select a Clinic*--</option>
                <option value="Device1">Device1</option>
                <option value="Device2">Device2</option>
                <option value="Device3">Device3</option>
                <option value="Device4">Device4</option>
            </select>
        </div>
        <div className="individual-clinic-containers">
            <label  className="clinics-label" for='enrollment'>Enrollment Type<sup>*</sup></label>
            <select required name="clinic-details" id="enrollment" onChange={this.onChangeEnrollment}>
            <option value="">--First Select a Clinic*--</option>
                <option value="E1">E1</option>
                <option value="E2">E2</option>
                <option value="E3">E3</option>
                <option value="E4">E4</option>
            </select>
        </div>

        <button type='submit'>submit</button>

    </form>
    )

}
}


export default SampleEnroll