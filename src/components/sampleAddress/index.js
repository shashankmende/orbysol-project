import { Component } from 'react'

import axios  from 'axios';

const states = [
    'Select State',"Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep",
    "Puducherry", "Ladakh", "Jammu and Kashmir"
];

class SampleAddress extends Component {

    state ={address:{},city:'',state:'',zip:'',primaryPhone:{},secondaryPhone:{}}


    onChangeAddress1 =(e)=>{
        const {address} = this.state
        this.setState({
            address:{...address,address1:e.target.value}
        })

    }

    onChangeAddress2 = (e)=>{
        const {address} = this.state
        this.setState({
            address:{...address,address2:e.target.value}
        })
    }


    onChangeCity = (e)=>{
        this.setState({
            city:e.target.value
        })
    }

    onChangeState = (e)=>{
        this.setState({
            state:e.target.value
        })
    }


    onChangezip =(e)=>{
        this.setState({
            zip:e.target.value
        })
    }

    onChangePrimarynumber =(e)=>{
        const {primaryPhone} = this.state
        this.setState({
            primaryPhone:{...primaryPhone,number:e.target.value}
        })
    }



    onChangePrimaryNumberType =(e)=>{
        const {primaryPhone} = this.state
        this.setState({
            primaryPhone:{...primaryPhone,type:e.target.value}
        })
    }

    onChangeSecondaryPhone = (e)=>{
        const {secondaryPhone} = this.state
        this.setState({
            secondaryPhone:{...secondaryPhone,number:e.target.value}
        })
    }

    onChangeSecondaryPhoneType =(e)=>{
        const {secondaryPhone} = this.state
        this.setState({
            secondaryPhone:{...secondaryPhone,type:e.target.value}
        })
    }

    onSubmitForm =async(e)=>{
        e.preventDefault()
        try{
            const {address,city,state,primaryPhone,secondaryPhone,zip} = this.state
            const {address1,address2} = address
            const completeAddress ={
                address1,
                address2,
                city,
                state,
                primaryPhone,
                secondaryPhone,
                zip
            }

            const url ='http://localhost:3000/api/auth/register'
            const response = await axios.post(url,completeAddress,{
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

        <form onSubmit={this.onSubmitForm}>

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


            <button type='submit'>submit</button>
        </form>
      
    )
  }
}


export default SampleAddress