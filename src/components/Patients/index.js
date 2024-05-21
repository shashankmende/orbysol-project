


import { Component } from 'react'
import Sidebar from '../sidebar'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import axios from 'axios'
import './index.css'

class Patients extends Component {

    state = {patientDetails:[],searchText:'',showSideBar:false}


    gatheringPatientDetails = (numberOfPatients,data)=>{
        

        const {clinic,patients,address,provider} = data
        // console.log('clinic',clinic)
        const newList =[]


        for (let i=0;i<numberOfPatients;i++){
            
            const patienObject= patients[i]
            const clinicObject= clinic[i]
            const addressObject = address[i]
            const providerObject = provider[i]
            const newObject = {...patienObject,...clinicObject,...addressObject,...providerObject}
            newList.push(newObject)
        }
        return newList



    }

    getData = async()=>{
        
        try{
        const url = 'http://localhost:3000/api/auth/details'
        const response = await axios.get(url,{
            headers:{
                'Content-Type':"applications/json"
            }
        })
        console.log('data',response)
        if (response.statusText === 'OK'){
            const {data} =  response
            // console.log('data',data)?/?
            const {clinic} = data
            const newList = this.gatheringPatientDetails(clinic.length,data)
            console.log("new list",newList)

            this.setState({
                patientDetails:  newList
            })

        }
        


    }
    catch(e){
        console.log("Error in getting details from database: ",e)
    }
    }

    componentDidMount(){
        this.getData()

    }

    onChangeSearchText =(e)=>{
        
        
        this.setState({
            searchText:e.target.value,
            

        })
    }


    onClickMenu = ()=>{
        this.setState(prevState=>({
            showSideBar:!prevState.showSideBar
        }))
    }

  render() {
    
    const {patientDetails,searchText,showSideBar} = this.state
    const filteredList = patientDetails.filter(patient=>patient.firstName.toLowerCase().includes(searchText.toLocaleLowerCase()))
    
    const reactIcon = showSideBar ? <RxCross1 size={30} className='react-icon' onClick={this.onClickMenu}/>:<CiMenuBurger size={30} className='react-icon' onClick={this.onClickMenu}/>

    return (

        <div className="patients-bg-container">
            
        
        <div>
            <div className='heading-input-container'>
                <div>
                {reactIcon }

                {showSideBar && <div className='sidebar-container'><Sidebar/></div>}
                </div>
            
            <h2 className='patients-list-heading'>Patient List</h2>
            <input value={searchText} type='search' onChange={this.onChangeSearchText} placeholder='Search by First Name'/>
          
            </div>
      
      <table>
        <thead>
          <tr>
            <th> Name</th>
           
            <th>DOB</th>
            <th>Enrollment Type</th>
            <th>Device ID</th>
            <th>State</th>
            <th>Gender</th>
            <th>Pacemaker</th>
            <th>ICD</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(patient => {
            const {firstName,lastName,dob,state,_id,gender,pacemaker,icd,address1,enrollmentType,deviceName,primaryPhone} = patient
            return(
            <tr key={`${_id}`}>
              <td>{firstName+' '+lastName}</td>
              
              <td>{dob}</td>
              <td>{enrollmentType}</td>
              <td>{deviceName}</td>
              <td>{state}</td>
              <td>{gender}</td>
              <td>{pacemaker}</td>
              <td>{icd}</td>
              <td>{address1}</td>
              <td>{primaryPhone.number}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
    </div>
    
    )
  }
}

export default Patients
