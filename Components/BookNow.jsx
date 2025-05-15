import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import '../css/booknow.css';
import axios from 'axios';



export default function BookNow() {
  const[name,setFullname] = useState('');
  const[email,setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const [halltype, setHalltype ] = useState('');
  const [hallcategory, setHallcategory] = useState('');
  const[eventdate,setEventDate]=useState('');
  const [persons, setPersons] = useState(1);
  const[events,setEvent]=useState('');
  const[timing,setTiming]=useState('');
  const [payment,setPayment]=useState(0);
  const [minDate, setMinDate] = useState('');

  const navigate=useNavigate();
  const handlefullnameChange = (event) => setFullname(event.target.value);
  const handleemailChange = (event) => setEmail(event.target.value);
  const handlephoneChange = (event) => setPhone(event.target.value);
  const handlehallChange = (event) => setHalltype(event.target.value);
  const handlehallcateChange = (event) => setHallcategory(event.target.value);
  const handleEventDateChange = (event)=> setEventDate(event.target.value);
  const handlePersonsChange = (event) => setPersons(event.target.value);
  const handleEventChange = (event)=>setEvent(event.target.value);
  const handleTimingChange = (event)=>setTiming(event.target.value);
  

const handleBooking=(event)=>{
event.preventDefault();
axios.post('http://127.0.0.1:3001/BookNow',{
  name:name,
  email : email,
  phone: phone,
  halltype: halltype,
  hallcategory: hallcategory,
  eventdate: eventdate,
  persons: persons,
  events:events,
  timing: timing,
  payment: payment
})
.then(response => {
        console.log('Booking successful:', response.data);
        alert("Booking sucessfully")
      })
      .catch(error => {
        console.error('Error booking :', error);
      });
      navigate("/")
}
  useEffect(() => {
    const dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    const year = dtToday.getFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  }, []);
  
 

  const handlepayment = ()=>{
   let calculatedPrize=0;
   const prices = {
    auditorium: { ac: 1000, nonac: 700, standard:500},
    banquet: { ac: 1000, nonac: 700, standard:500 },
    conference:{ac: 1000, nonac: 700, standard:500}
    
   };
   
   if (prices[halltype] && prices[halltype][hallcategory]) {
    const pricePerPerson = prices[halltype][hallcategory];
    calculatedPrize = pricePerPerson * persons; 
    console.log(halltype) 
    console.log(calculatedPrize)
}

setPayment(calculatedPrize);
};
  
  return (
    <div className='book'> 
      <>
    <h1>Your Dream Event Awaits – Book Now!</h1>
    <div className="book-sect">
    <div className="booking-form">
        <h1>Booking Form</h1>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="fullname" required onChange={handlefullnameChange} />
          </div>
      
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  required onChange={handleemailChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Contact No.:</label>
            <input type="number" name="phone" onChange={handlephoneChange} />
         </div> 

          <div className="form-group">
            <label htmlFor="halltype">Select Hall Type</label>
            <select value={halltype} onChange={handlehallChange} id="halltype" name="halltype" required>
              <option value="">-- Choose a Hall --</option>
              <option value="auditorium">Auditorium</option>
              <option value="banquet">Banquet Hall</option>
              <option value="conference">Conference Room</option>
              <option value="outdoor">Outdoor Stage</option>
            </select>
          </div>
             <div className="form-group">
                <label htmlFor="hallcategory">Hall Category</label>
                <select value={hallcategory} onChange={handlehallcateChange} id="hallcategory" name="hallcategory" required>
                  <option value="">-- Choose a Category --</option>
                  <option value="ac">AC</option>
                  <option value="nonac">NonAC</option>
                  <option value="standard">Standard</option>
                </select>
              </div>
              
          <div className="form-group">
            <label htmlFor="event-date">Event Date:</label>
            <input type="date" id="event-date"   min={minDate} name="eventdate"  required onChange={handleEventDateChange}/>
          </div>
      
          <div className="form-group">
            <label htmlFor="persons">Number of Person for event:</label>
            <input type="number"  onChange={handlePersonsChange} value={persons} id="persons" name="persons" min="1" max="100" required/>
          </div>
      
          <div className="form-group">
            <label htmlFor="event_class">Select Event</label>
            <select value={events} onChange={handleEventChange}  id="event_class" name="event_class" required>
              <option value="">-- Choose an Event --</option>
              <option value="Wedding Decor">Wedding Decor</option>
              <option value="Award Ceremonies">Award Ceremonies</option>
              <option value="Conference ">Conference </option>
              <option value="Product-launch">Product-launch</option>
            </select>
          </div>

          

         <div className="form-group">
            <label htmlFor="Timing">Select Your Timing:</label>
            <select value={timing} id="timing" onChange={handleTimingChange}  name="timing" >
            <option value="" disabled >Select schedule</option>
            <option value="frist">4:00 AM</option>
            <option value="second">7:00 AM</option>
            <option value="third">9:00 AM</option>
            <option value="fourth">1:00 PM</option>
            <option value="five">5:00 PM</option>
            <option value="sixth">6:00 PM</option>
            </select>    
        </div>

        <div className="form-group">
            <label htmlFor="payment">Amount to be Paid</label>
            <input type="number" name="payment" id="payment" value={payment} readOnly />
        </div>
            <button id="check"  className="check-prize" onClick={handlepayment} type="button">Check Charges</button>
             <button type="submit" className="submit-btn" >Book Event</button>
        </form>
        
       </div>
      </div>
    </>
    </div>
  )
}
