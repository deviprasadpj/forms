import './index.css'
import { BsBellFill, BsFillEnvelopeExclamationFill, BsPerson } from "react-icons/bs"

const Form = (props) => {
    return (
        <div className='form-page'>
            <div className='nav-container'>
                <div className='ip-logo'>
                    IP LOGO
                </div>
                <div>
                    <div className='nav-right-side-container'>
                        <BsBellFill className='icons'/>
                        <BsFillEnvelopeExclamationFill className='icons'/>
                        <BsPerson className='icons'/>
                        <select><option>Role</option></select>
                    </div>
                    <div>
                        <p className='time-and-date'> Wed Jul 4 2024 20:24:08</p>
                    </div>
                </div>
            </div>
            <p className='refernce-data'>Reference Data/Customer Data/Party/Create</p>
            <div className='main-content-container'>
                <div className='buttons-container'>
                    <button> Instructions </button>
                    <button> Transactions </button>
                    <button> Reference Data </button>
                    <button> Customer Data </button>
                    <button> Party </button>
                    <button> Requests-Response </button>
                    <button> Right-aligned menu </button>
                    <button> Right-aligned menu </button>
                    <button> Right-aligned menu </button>
                    <button> Right-aligned menu </button>
                    <button> Right-aligned menu </button>
                </div>
                <div class="cards-container">
                    <div>
                        <p>Pary Primary Details </p>
                        <div className='inner-grid'>
                            <div className='input-container'>
                                <input placeholder='TenantId' />
                                <input placeholder='TID0001' />
                            </div>
                            <div className='input-container'>
                                <input placeholder='Party Name' />
                                <input placeholder='JP Morgan chase & Co' />
                                <input placeholder='PartyCode' />
                                <input placeholder='Auto-Generated value' />
                            </div>
                            <div className='input-container'>
                                <input placeholder='Party Category' />
                                <select>
                                    <option>{"select"}</option>
                                    <option>Customer</option>
                                </select>
                                <input placeholder='Party Defined Name' />
                                <input placeholder='JPMC NJ' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Party Identifiers</p>
                        <div className='inner-grid'>
                            <div className='input-container'>
                                <input placeholder= 'External Identifier' />
                                <input placeholder= 'Text Field' />
                                <input placeholder= 'Clearing Participant Identifier' />
                                <input placeholder= 'Text Field' />
                            </div>
                            <div className='input-container'>
                                <input placeholder= 'Legal Entity Identifier' />
                                <input placeholder= 'Text Field' />
                                <input placeholder= 'Owning Bank' />
                                <select>
                                    <option> {"Select Branch"} </option>
                                    <option> Branch Table </option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <p>Processing Details</p>
                            <div className='inner-grid'>
                                <div className='input-container'>
                                    <input placeholder='Processing Restrictions' />
                                    <select>
                                        <option> {"Select"} </option>
                                        <option> STOP DEBIT </option>
                                    </select>
                                    <input placeholder='Calender Code' />
                                    <select>
                                        <option> {"Select Calender"}</option>
                                        <option> Calender Table </option>
                                    </select>
                                </div>
                                <div className='input-container'>
                                    <input placeholder='Processing Profile' />
                                    <select>
                                        <option> {"select"} </option>
                                        <option> Processing Profile Table </option>
                                    </select>
                                    <input placeholder='Effective From'/>
                                    <input type='date' placeholder='Auto-Generated value' />
                                </div>
                                <div className='input-container'>
                                    <input placeholder='Status' />
                                    <div style={{display:'flex',justifyContent:'space-around'}}>
                                        <div>
                                            <input type="radio" id="active" name="active" />
                                            <label for="active">Active</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="inactive" name="active" />
                                            <label for="inactive">Inactive</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='bottom-buttons'> Cancel </button>
                            <button className='bottom-buttons'> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default Form