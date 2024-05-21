
import Sidebar from "../sidebar"
import {Component} from 'react'
import axios  from 'axios';

import './index.css'


const states = [
    'Select State',"Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep",
    "Puducherry", "Ladakh", "Jammu and Kashmir"
];

class NewEnrollment extends Component {

    state = {clinicData:{
        clinicName:'',deviceName:'',enrollmentType:''},
        patientDetails:{name:{firstName:'',lastName:"",middleName:''},dob:'',gender:'',pacemaker:'',icd:''},
        addressDetails:{address:{address1:'',address2:''},primaryPhone:{number:'',type:''},secondaryPhone:{number:'',type:""}},
        orderingData:{orderProvider:'',readingProvider:'',referringProvider:''  }
    }
//  first set
    onClickClinicName =(e)=>{
        const {clinicData} = this.state
        console.log('clinic name',e.target.value)
        this.setState({
            clinicData:{...clinicData,clinicName:e.target.value}
        })
    }

    onChangeDeviceName =(e)=>{
        const {clinicData} = this.state
        console.log('clinic name',e.target.value)
        this.setState({
            clinicData:{...clinicData,deviceName:e.target.value}
        })
    }

    onChangeEnrollment =(e)=>{
        const {clinicData} = this.state
        console.log('clinic name',e.target.value)
        this.setState({
            clinicData:{...clinicData,enrollmentType:e.target.value}
        })
    }

    // second set

    onChangeLastName = (e)=>{
        const {patientDetails} = this.state
        const {name} = patientDetails
        
        this.setState({
            patientDetails:{...patientDetails,name:{...name,lastName:e.target.value}}
        })
    }

    onChangeFirstName =(e)=>{
        const {patientDetails} = this.state
        const {name} = patientDetails
        
        this.setState({
            patientDetails:{...patientDetails,name:{...name,firstName:e.target.value}}
        })
    }

    onChangeMiddleName =(e)=>{
        
        const {patientDetails} = this.state
        const {name} = patientDetails
        
        this.setState({
            patientDetails:{...patientDetails,name:{...name,middleName:e.target.value}}
        })
    }


    onChangeDate = (e)=>{
        const {patientDetails} = this.state
        
        
        this.setState({
            patientDetails:{...patientDetails,dob:e.target.value}
        })
    }

    onChangeGender = (e)=>{
        const {patientDetails} = this.state
        this.setState({
            patientDetails:{...patientDetails,gender:e.target.value}
        })
    }

    onChagePacemaker =(e)=>{
        const {patientDetails} = this.state
        this.setState({
            patientDetails:{...patientDetails,pacemaker:e.target.value}
        })
    }

    onChangeICD = (e)=>{
        const {patientDetails} = this.state
        this.setState({
            patientDetails:{...patientDetails,icd:e.target.value}
        })
    }







    // third set

    onChangeAddress1 =(e)=>{

        const {addressDetails} = this.state
        const {address} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,address:{...address,address1:e.target.value}}
        })

    }

    onChangeAddress2 = (e)=>{
        const {addressDetails} = this.state
        const {address} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,address:{...address,address2:e.target.value}}
        })
    }


    onChangeCity = (e)=>{
        const {addressDetails} = this.state
        
        this.setState({
            addressDetails:{...addressDetails,city:e.target.value}
        })
    }

    onChangeState = (e)=>{
        const {addressDetails} = this.state
        
        this.setState({
            addressDetails:{...addressDetails,state:e.target.value}
        })
    }


    onChangezip =(e)=>{
        const {addressDetails} = this.state
        
        this.setState({
            addressDetails:{...addressDetails,zip:e.target.value}
        })
    }

    onChangePrimarynumber =(e)=>{
        const {addressDetails} = this.state
        const {primaryPhone} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,primaryPhone:{...primaryPhone,number:e.target.value}}
        })
    }

    


    onChangePrimaryNumberType =(e)=>{
        const {addressDetails} = this.state
        const {primaryPhone} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,primaryPhone:{...primaryPhone,type:e.target.value}}
        })
    }

    onChangeSecondaryPhone = (e)=>{
        const {addressDetails} = this.state
        const {secondaryPhone} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,secondaryPhone:{...secondaryPhone,number:e.target.value}}
        })
    }

    onChangeSecondaryPhoneType =(e)=>{
        const {addressDetails} = this.state
        const {secondaryPhone} = addressDetails
        this.setState({
            addressDetails:{...addressDetails,secondaryPhone:{...secondaryPhone,type:e.target.value}}
        })
    }


    //Fourth set

    onChangeOrderProvider =(e)=>{
        const {orderingData} = this.state
        this.setState({
          orderingData: {...orderingData,orderProvider:e.target.value}
        })
    }

    onChangeReadingProvider = (e)=>{
        const {orderingData} = this.state
        this.setState({
          orderingData: {...orderingData,readingProvider:e.target.value}
        })
    
    }

    onChangeReferyProvider  =(e)=>{
        const {orderingData} = this.state
        this.setState({
          orderingData: {...orderingData,referringProvider:e.target.value}
        })
    }


    onSubmitForm = async(e)=>{
        e.preventDefault()
        e.target.reset()
 


        const {clinicData,patientDetails,addressDetails,orderingData} = this.state
        // const {clinicName,deviceName,enrollmentType} = clinicData
        // const {name,dob,gender,pacemaker,icd} = patientDetails
        // const {address,city,state,zip,primaryPhone,secondaryPhone} = addressDetails
        // const {orderProvider,readingProvider,referringProvider} = orderingData
        const totalData= {
            clinicData,
            patientDetails,
            addressDetails,
            orderingData
        }

        try{

            const url ='http://localhost:3000/api/auth/register'
             await axios.post(url,totalData,{
                headers:{
                    'Content-Type':'application/json'
                }
            })

            this.setState({
                clinicData:{clinicName:'',deviceName:'',enrollmentType:''},
                
                patientDetails:{name:{firstName:'',lastName:"",middleName:''},dob:'',gender:'',pacemaker:'',icd:''},
                
                addressDetails:{address:{address1:'',address2:''},primaryPhone:{number:'',type:''},secondaryPhone:{number:'',type:""}},
                orderingData:{orderProvider:'',readingProvider:'',referringProvider:''  }
           })

           

            // console.log('response',response)


        }
        catch(e){

            console.log("Error after submitting form")
        }
    }




    render(){


        
    return(
    <div className='new-enrollment-bg-container'>
    <Sidebar/>
    <div className="new-enrollment-container">
        <form onSubmit={this.onSubmitForm}>
            <h1 className="enrollment-heading">New Enrollment</h1>
            <div className="clinic-container">
            <div className="individual-clinic-containers">
            <label className="clinics-label" for='clinic'>Select Clinic<sup>*</sup></label>
            <select  required name="clinic-details" id="clinic" onChange={this.onClickClinicName}>
            <option value="">--Select Clinic*--</option>
                <option value="Clinic1">Clinic1</option>
                <option value="Clinic2">Clinic2</option>
                <option value="Clinic3">Clinic3</option>
                <option value="Clinic4">Clinic4</option>
            </select>
        </div>
        <div className="individual-clinic-containers">
            <label  className="clinics-label" for='device'>Select Device<sup>*</sup></label>
            <select  required name="clinic-details" id="device" onChange={this.onChangeDeviceName}>
            <option value="">--First Select a Clinic*--</option>
                <option value="Device1">Device1</option>
                <option value="Device2">Device2</option>
                <option value="Device3">Device3</option>
                <option value="Device4">Device4</option>
            </select>
        </div>
        <div className="individual-clinic-containers">
            <label  className="clinics-label" for='enrollment'>Enrollment Type<sup>*</sup></label>
            <select  required name="clinic-details" id="enrollment" onChange={this.onChangeEnrollment}>
            <option value="">--First Select a Clinic*--</option>
                <option value="E1">E1</option>
                <option value="E2">E2</option>
                <option value="E3">E3</option>
                <option value="E4">E4</option>
            </select>
        </div>

            </div>

            <div className="patient-details-container">
                <h1 className="patient-details-heading">Enter Patient info</h1>
               <div className="patient-form-container">
               <div className="names-container">
            <div className="individual-names-container">
                <label for='last-name' className="names-label">Last Name<sup>*</sup></label>
                <input  required id='last-name' type='text' placeholder="Last Name*"  className="names-input" onChange={this.onChangeLastName}/>
            </div>
            <div  className="individual-names-container">
                <label for='first-name'  className="names-label">First Name<sup>*</sup></label>
                <input  required id="first-name" type='text' placeholder="First Name*" className="names-input" onChange={this.onChangeFirstName}/>
            </div>
            <div  className="individual-names-container">
                <label for='middle-name'  className="names-label">Middle Name</label>
                <input id='middle-name' type='text' placeholder="Middle Name"  className="names-input" onChange={this.onChangeMiddleName}/>
            </div>

            </div>
        <div className="date-container">
            <label className="names-label" for='date-of-birth'>Date of Birth<sup>*</sup></label>
            <input  required id="date-of-birth" type='date' className="names-input" onChange={this.onChangeDate}/>
        </div>

        <div className="gender-pacemaker-icd-container">
            <div className="gender-container">
                <label required className="names-label">Gender<sup>*</sup></label>
                <div className="individual-gender-container">
                    <input value="Male" required id='male' type='radio' name='gender'  onChange={this.onChangeGender}/>
                    <label for='male' >Male</label>
                </div>
                <div  className="individual-gender-container">
                    <input value="Female" required id='female' type='radio' name='gender'   onChange={this.onChangeGender}/>
                    <label for='female' >Female</label>
                </div>
            </div>

            <div className="pacemaker-container">
                <label  className="names-label">Has Pacemaker<sup>*</sup></label>
                <div className="radio-buttons-container">
                <div>
                    <input value='N/A' name='pacemaker' id='nonPacemaker' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label required htmlFor='nonPacemaker' className="">N/A</label>
                </div>
                <div>
                    <input value='yes' required name='pacemaker' id='yes' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label for='yes' className="">Yes</label>
                </div>
                <div>
                    <input value='no' required name='pacemaker' id='no' type='radio' className="" onChange={this.onChagePacemaker}/>
                    <label htmlFor='no' className="">No</label>
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
                
        <div className="address-container">
                    <label for='address1' className="names-label">Address line1<sup>*</sup></label>
                    <input required id="address1" type="text" className="address-input" placeholder="Address line1*" onChange={this.onChangeAddress1}/>
                </div>

                <div className="address-container">
                    <label for='address2' className="names-label">Address line2</label>
                    <input id="address2" type="text" className="address-input" placeholder="Address line2" onChange={this.onChangeAddress2}/>
                </div>

                <div className="city-state-zip-container">
                    <div>
                        <label  className="names-label" for='city'>City<sup>*</sup></label>
                        <input required id='city' type='text' className="city-input" placeholder="City*" onChange={this.onChangeCity}/>
                    </div>

                    <div>
                        <label className="names-label" htmlFor="states">State<sup>*</sup></label>
                        <select required id="states" name="states" onChange={this.onChangeState}>
                            {states.map((state, index) => {
                                if (index===0){
                                    return (
                                        <option key={index} value={''}>
                                        {state}
                                    </option>
                                    )
                                }
                                return(
                                <option key={index} value={state.toLowerCase().replace(/\s+/g, '_')}>
                                    {state}
                                </option>
                            )})}
                        </select>
                    </div>
                    <div className="zip-code-container">
                        <label className="names-label" htmlFor="zip">Zip<sup>*</sup></label>
                        <input  required id='zip' type='number' placeholder="Zip*" className="zip-input" onChange={this.onChangezip}/>

                    </div>

                </div>

                <div className="phone-numbers-container">
                    <div className="primary-phone-number-container">
                        <label className="names-label" for='p-phone'>Primary Phone<sup>*</sup></label>
                        <input required id="p-phone" type='text' placeholder="primary phone*" className="primary-phone" onChange={this.onChangePrimarynumber}/>
                        <select id="p-phone" className="mobile-select-container" onChange={this.onChangePrimaryNumberType}>
                            <option value=''>Select phone</option>
                            <option value={"Mobile"}>Mobile</option>
                            <option value={"Landline"}>Landline</option>
                        </select>
                    </div>
                    <div className="primary-phone-number-container">
                        <label className="names-label" for='s-phone'>Secondary Phone</label>
                        <input id="s-phone" type='text' placeholder="secondary phone*" className="primary-phone" onChange={this.onChangeSecondaryPhone}/>
                        <select id="s-phone" className="mobile-select-container" onChange={this.onChangeSecondaryPhoneType}>
                        <option value=''>Select phone</option>
                            <option value={"Mobile"}>Mobile</option>
                            <option value={"Landline"}>Landline</option>
                        </select>
                    </div>

                </div>

                <div className="emergency-contact-info">
                    <p>Enter emergency contact info</p>
                    <button type="button">+</button>

                </div>


               </div>

            </div>

        <div className="providers-container">
        <div className="order-provider-container">
            <label htmlFor="order-provider" className="names-label">Order Provider<sup>*</sup></label>
            <select required id="order-provider" onChange={this.onChangeOrderProvider}>
                <option value={''}>First select a clinic</option>
                <option value={'OP1'}>OP1</option>
                <option value={'OP2'}>OP2</option>
                <option value={'OP3'}>OP3</option>
                <option value={'OP4'}>OP4</option>
            </select>
        </div>
        <div className="order-provider-container">
            <label htmlFor="Reading-provider" className="names-label">Reading Provider<sup>*</sup></label>
            <select required id="Reading-provider" onChange={this.onChangeReadingProvider}>
                <option value={''}>First select a clinic</option>
                <option value={'RP1'}>RP1</option>
                <option value={'RP2'}>RP2</option>
                <option value={'RP3'}>RP3</option>
                <option value={'RP4'}>RP4</option>


            </select>
        </div>
        <div className="order-provider-container">
            <label htmlFor="Referring-provider" className="names-label">Referring Provider</label>
            <input type="text" placeholder="Referring Provider Name" className="rf-input" onChange={this.onChangeReferyProvider}/>
        </div>
        </div>

        <div className="save-button-container">
            <button type='submit' className="save-button">Save</button>
        </div>

        </form>
    
    </div>
    
    </div>
    

)
}
}

export default NewEnrollment