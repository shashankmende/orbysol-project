
import Sidebar from "../sidebar"

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

const NewEnrollment =()=>(
    <div className='new-enrollment-bg-container'>
    <Sidebar/>
    <div className="new-enrollment-container">
        <form>
            <h1 className="enrollment-heading">New Enrollment</h1>
            <div className="clinic-container">
                <div className="individual-clinic-containers">
                    <label className="clinics-label" for='clinic'>Select Clinic<sup>*</sup></label>
                    <select required name="clinic-details" id="clinic">
                    <option value="">--Select Clinic*--</option>
                        <option value="Clinic1">Clinic1</option>
                        <option value="Clinic2">Clinic2</option>
                        <option value="Clinic2">Clinic3</option>
                        <option value="Clinic4">Clinic4</option>
                    </select>
                </div>
                <div className="individual-clinic-containers">
                    <label  className="clinics-label" for='device'>Select Device<sup>*</sup></label>
                    <select name="clinic-details" id="device">
                    <option value="">--First Select a Clinic*--</option>
                        <option value="Device1">Device1</option>
                        <option value="Device2">Device2</option>
                        <option value="Device2">Device3</option>
                        <option value="Device4">Device4</option>
                    </select>
                </div>
                <div className="individual-clinic-containers">
                    <label  className="clinics-label" for='enrollment'>Enrollment Type<sup>*</sup></label>
                    <select name="clinic-details" id="enrollment">
                    <option value="">--First Select a Clinic*--</option>
                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E2">E3</option>
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
                        <input id='last-name' type='text' placeholder="Last Name*"  className="names-input"/>
                    </div>
                    <div  className="individual-names-container">
                        <label for='first-name'  className="names-label">First Name<sup>*</sup></label>
                        <input id="first-name" type='text' placeholder="First Name*" className="names-input"/>
                    </div>
                    <div  className="individual-names-container">
                        <label for='middle-name'  className="names-label">Middle Name</label>
                        <input id='middle-name' type='text' placeholder="Middle Name"  className="names-input"/>
                    </div>

                    </div>
                <div className="date-container">
                    <label className="names-label" for='date-of-birth'>Date of Birth<sup>*</sup></label>
                    <input id="date-of-birth" type='date' className="names-input"/>
                </div>

                <div className="gender-pacemaker-icd-container">
                    <div className="gender-container">
                        <label className="names-label">Gender<sup>*</sup></label>
                        <div className="individual-gender-container">
                            <input id='male' type='radio' name='gender'/>
                            <label for='male' >Male</label>
                        </div>
                        <div  className="individual-gender-container">
                            <input id='female' type='radio' name='gender'/>
                            <label for='female' >Female</label>
                        </div>
                    </div>

                    <div className="pacemaker-container">
                        <label className="names-label">Has Pacemaker<sup>*</sup></label>
                        <div className="radio-buttons-container">
                        <div>
                            <input name='pacemaker' id='N/A' type='radio' className=""/>
                            <label for='N/A' className="">N/A</label>
                        </div>
                        <div>
                            <input name='pacemaker' id='yes' type='radio' className=""/>
                            <label for='yes' className="">Yes</label>
                        </div><div>
                            <input name='pacemaker' id='No' type='radio' className=""/>
                            <label for='No' className="">No</label>
                        </div>
                        </div>
                    </div>

                    <div className="ICD-container">
                        <label className="names-label">Has ICD<sup>*</sup></label>
                        <div className="radio-buttons-container">
                        <div>
                            <input name='icd' id='ICD-N/A' type='radio' className=""/>
                            <label for='ICD-N/A' className="">N/A</label>
                        </div>
                        <div>
                            <input name='icd' id='icd-yes' type='radio' className=""/>
                            <label for='icd-yes' className="">Yes</label>
                        </div><div>
                            <input name='icd' id='icd-No' type='radio' className=""/>
                            <label for='icd-No' className="">No</label>
                        </div>
                        </div>
                    </div>




                </div>
                
                <div className="address-container">
                    <label for='address1' className="names-label">Address line1<sup>*</sup></label>
                    <input id="address1" type="text" className="address-input" placeholder="Address line1*"/>
                </div>

                <div className="address-container">
                    <label for='address2' className="names-label">Address line2</label>
                    <input id="address2" type="text" className="address-input" placeholder="Address line2"/>
                </div>

                <div className="city-state-zip-container">
                    <div>
                        <label  className="names-label" for='city'>City<sup>*</sup></label>
                        <input id='city' type='text' className="city-input" placeholder="City*"/>
                    </div>

                    <div>
                        <label className="names-label" htmlFor="states">State</label>
                        <select id="states" name="states">
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
                        <input id='zip' type='number' placeholder="Zip*" className="zip-input"/>

                    </div>

                </div>

                <div className="phone-numbers-container">
                    <div className="primary-phone-number-container">
                        <label className="names-label" for='p-phone'>Primary Phone<sup>*</sup></label>
                        <input id="p-phone" type='text' placeholder="primary phone*" className="primary-phone"/>
                        <select id="p-phone" className="mobile-select-container">
                            <option value={"Mobile"}>Mobile</option>
                            <option value={"Landline"}>Landline</option>
                        </select>
                    </div>
                    <div className="primary-phone-number-container">
                        <label className="names-label" for='s-phone'>Secondary Phone</label>
                        <input id="s-phone" type='text' placeholder="primary phone*" className="primary-phone"/>
                        <select id="s-phone" className="mobile-select-container">
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
                <select id="order-provider">
                    <option value={''}>First select a clinic</option>
                    <option value={'OP1'}>OP1</option>
                    <option value={'OP2'}>OP2</option>
                    <option value={'OP3'}>OP3</option>
                    <option value={'OP4'}>OP4</option>


                </select>
            </div>
            <div className="order-provider-container">
                <label htmlFor="Reading-provider" className="names-label">Reading Provider<sup>*</sup></label>
                <select id="Reading-provider">
                    <option value={''}>First select a clinic</option>
                    <option value={'RP1'}>RP1</option>
                    <option value={'RP2'}>RP2</option>
                    <option value={'RP3'}>RP3</option>
                    <option value={'RP4'}>RP4</option>


                </select>
            </div>
            <div className="order-provider-container">
                <label htmlFor="Referring-provider" className="names-label">Referring Provider</label>
                <input type="text" placeholder="Referring Provider Name" className="rf-input"/>
            </div>

        </div>

        <div className="save-button-container">
            <button type='submit' className="save-button">Save</button>
        </div>

        </form>
    
    </div>
    
    </div>
    

)

export default NewEnrollment