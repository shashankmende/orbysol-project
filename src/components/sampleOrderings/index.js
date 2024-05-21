import { Component } from 'react'
import axios  from 'axios';

 class SampleOrdering extends Component {

    state  = {orderProvider:'',readingProvider:'',referringProvider:''}
    
    onChangeOrderProvider =(e)=>{
        this.setState({
            orderProvider:e.target.value
        })
    }

    onChangeReadingProvider = (e)=>{
        this.setState({
            readingProvider:e.target.value
        })
    
    }

    onChangeReferyProvider  =(e)=>{
        this.setState({
            referringProvider:e.target.value
        })
    }

    onSubmitForm = async(e)=>{
        e.preventDefault()
        try{
            const {orderProvider,readingProvider,referringProvider} = this.state
            const orderDetails ={
                orderProvider,
                readingProvider,
                referringProvider
            }
            const url ='http://localhost:3000/api/auth/register'
            const response = await axios.post(url,orderDetails,{
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
      
        
        <form className="providers-container" onSubmit={this.onSubmitForm}>
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

<button type='submit'>Submit</button>
    </form>





    )
  }
}



export default SampleOrdering