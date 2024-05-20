
import { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='logo-title-container'>
            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716111803/Logo_Shapes_2_oijxtk.png'
           className='web-logo' 
           alt='logo'
           
            />
            <h1>Ogroup Hospital</h1>
        </div>
        <ul>
            <Link to='/new-enrollment'>
            <li>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716112336/contacts_upuky1.png'
                className='sidebar-link'
                alt='new-enrollment'
                />
                <button type='button'>New Enrollment</button>
            </li>
            </Link>
            <Link to='/patients'>
            <li>
            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716112915/groups_perogb.png'
                className='sidebar-link'
                alt='new-enrollment'
                />
                <button type='button'>Patients</button>
            </li>
            </Link>
        </ul>
      </div>
    )
  }
}

export default Sidebar