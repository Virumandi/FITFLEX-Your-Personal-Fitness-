import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='Footer'>

        <div className="footer-body">

            <ul>
              <li onClick={()=> navigate("/bodyPart/back")}>BACK</li>
              <li onClick={()=> navigate("/bodyPart/cardio")}>CARDIO</li>
              <li onClick={()=> navigate("/bodyPart/chest")}>CHEST</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/bodyPart/neck")}>NECK</li>
              <li onClick={()=> navigate("/bodyPart/upper%20legs")}>UPPER LEGS</li>
              <li onClick={()=> navigate("/bodyPart/shoulders")}>SHOULDERS</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/equipment/cable")}>CABLE</li>
              <li onClick={()=> navigate("/equipment/dumbbell")}>DUMBBELLl</li>
              <li onClick={()=> navigate("/equipment/band")}>BAND</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/equipment/roller")}>ROLLER</li>
              <li onClick={()=> navigate("/equipment/hammer")}>HAMMER</li>
              <li onClick={()=> navigate("/equipment/kettlebell")}>KETTLEBELL</li>
            </ul>

        </div>

        <hr />

       <p>FitZONE Fitness  - &copy; 2025 - All Rights Reserved</p>
       <p>Contact Us </p>
       <p>saranya2004@gmail.com</p>
       <p>+918148711035</p>
        

        

    </div>
  )
}

export default Footer