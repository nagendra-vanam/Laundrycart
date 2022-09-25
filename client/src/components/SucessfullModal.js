import React from 'react'
import tick from '../logo/tickImage.svg'
import './SucessfullModal.css'
import { useNavigate } from 'react-router-dom'


function SucessfullModal() {
    const navaigate = useNavigate()
  return (
    <>
        <div  className='GSucessFullModal' > 
            <div className='GContainerSucess'>
                <div className='GimageSucessfullImage'>
                    <img src={tick}/>
                </div>
                <div >
                    <h4>Your order is successfully.</h4>
                </div>
                <div>
                    <p>You can track the delivery in the "Orders" section.</p>
                </div>
                <div>
                    <button onClick={()=>navaigate('/order')} className='GbuttonforOrder'>Go to orders</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SucessfullModal
