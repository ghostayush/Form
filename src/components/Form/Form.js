import React, { Fragment,useEffect,useState } from 'react'
import './Form.css'
import axios from "axios";
import{Link} from 'react-router-dom';

const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

      const [question1,setquestion1] = useState();
      const [question2,setquestion2] = useState();
      const [question3,setquestion3] = useState();
      const [question4,setquestion4] = useState();
      const [question5,setquestion5] = useState();
      const [question6,setquestion6] = useState();
      const [responseData, setResponseData] = useState(null);


      const switchquestion =(Question)=>{
        if(Question == '1'){
          document.getElementById("first").classList.add("active");
          document.getElementById("second").classList.remove("active");
          document.getElementById("third").classList.remove("active");
          document.getElementById("fourth").classList.remove("active");
          document.getElementById("five").classList.remove("active");
          document.getElementById("six").classList.remove("active");
          document.getElementById("submit").classList.remove("active");
          document.getElementById("next").classList.add("active");
        }
        if(Question == '2'){
          document.getElementById("second").classList.add("active");
          document.getElementById("first").classList.remove("active");
          document.getElementById("third").classList.remove("active");
          document.getElementById("fourth").classList.remove("active");
          document.getElementById("five").classList.remove("active");
          document.getElementById("six").classList.remove("active");
          document.getElementById("submit").classList.remove("active");
          document.getElementById("next").classList.add("active");
        }
        if(Question == '3'){
          document.getElementById("third").classList.add("active");
          document.getElementById("first").classList.remove("active");
          document.getElementById("second").classList.remove("active");
          document.getElementById("fourth").classList.remove("active");
          document.getElementById("five").classList.remove("active");
          document.getElementById("six").classList.remove("active");
          document.getElementById("submit").classList.remove("active");
          document.getElementById("next").classList.add("active");
        }
        if(Question == '4'){
          document.getElementById("fourth").classList.add("active");
          document.getElementById("first").classList.remove("active");
          document.getElementById("second").classList.remove("active");
          document.getElementById("third").classList.remove("active");
          document.getElementById("five").classList.remove("active");
          document.getElementById("six").classList.remove("active");
          document.getElementById("submit").classList.remove("active");
          document.getElementById("next").classList.add("active");
        }
        if(Question == 5){
          document.getElementById("five").classList.add("active");
          document.getElementById("first").classList.remove("active");
          document.getElementById("second").classList.remove("active");
          document.getElementById("third").classList.remove("active");
          document.getElementById("fourth").classList.remove("active");
          document.getElementById("six").classList.remove("active");
          document.getElementById("submit").classList.remove("active");
          document.getElementById("next").classList.add("active");
        }
        if(Question == '6'){
          document.getElementById("six").classList.add("active");
          document.getElementById("first").classList.remove("active");
          document.getElementById("second").classList.remove("active");
          document.getElementById("third").classList.remove("active");
          document.getElementById("fourth").classList.remove("active");
          document.getElementById("five").classList.remove("active");
          document.getElementById("submit").classList.add("active");
          document.getElementById("next").classList.remove("active");
        }
      }

      useEffect(()=>{
        switchquestion(currentQuestion);
      },[currentQuestion]);

      const nexthandler =(e)=>{
        setCurrentQuestion(currentQuestion + 1);
      }

      const handleSubmit =async (e)=>{
        e.preventDefault();
        const data = {question1,question2,question3,question4,question5,question6};
        const result = Object.values(data);
        console.clear();
        console.log(result);

        const formData = new FormData();
        formData.append('output', JSON.stringify(result));

        try {
          const response = await axios.post('https://carrier-guidance.onrender.com/predict', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          // Handle the response from the API
          console.log(response.data);
          setResponseData(response.data);
        } catch (error) {
          // Handle errors here
          console.error('Error:', error);
        }
      };

  return (
    <Fragment>
    {responseData ? 
        <div className="response-data">
          <h2>API Response Data:</h2>
          <pre className="json-container">{JSON.stringify(responseData, null,2).slice(1, -1)}</pre>
          <Link><button className='home'>Home</button></Link>
        </div> :
       
        <form onSubmit={handleSubmit}>
       <div className='questions' id='first'>
	      <label className='head'>1: What subjects in school do you enjoy the most?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Mathematics and Science " value="7E" checked={question1} setter={setquestion1} />
	      <RadioInput label="Physical Education and Sports " value="7S" checked={question1} setter={setquestion1} />
        <RadioInput label="Art and Design" value="7A" checked={question1} setter={setquestion1} />
        <RadioInput label="Social Studies and Economics" value="7B" checked={question1} setter={setquestion1} />
        </div>
        </div>
	    </div>

      <div className='questions' id='second'>
	      <label className='head'>2: What activities do you enjoy outside of school?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Playing sports " value="8S" checked={question2} setter={setquestion2} />
	      <RadioInput label="Painting or drawing " value="7A" checked={question2} setter={setquestion2} />
        <RadioInput label="Reading books " value="6A" checked={question2} setter={setquestion2} />
        <RadioInput label="Building things" value="8E" checked={question2} setter={setquestion2} />
        </div>
        </div>
	    </div>

      <div className='questions' id='third'>
	      <label className='head'>3: Is there a particular field or profession that you find fascinating?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Professional Sports and Athletics " value="7S" checked={question3} setter={setquestion3} />
	      <RadioInput label="Data Analysis and Machine Learning" value="7D" checked={question3} setter={setquestion3} />
        <RadioInput label="Medical Research and Healthcare Innovation" value="7H" checked={question3} setter={setquestion3} />
        <RadioInput label="Entrepreneurship and Business Development" value="7B" checked={question3} setter={setquestion3} />
        </div>
        </div>
	    </div>

      <div className='questions' id='fourth'>
	      <label className='head'>4: Have you ever thought about what kind of problems in the world you'd like to solve?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Advancing Technology for Education and Learning" value="7T" checked={question4} setter={setquestion4} />
	      <RadioInput label="Improving Healthcare Access and Treatment" value="7H" checked={question4} setter={setquestion4} />
        <RadioInput label="Innovating Solutions for Global Poverty and Inequality" value="7C" checked={question4} setter={setquestion4} />
        <RadioInput label="Designing Sustainable Infrastructure for Growing Cities" value="7E" checked={question4} setter={setquestion4} />
        </div>
        </div>
	    </div>

      <div className='questions' id='five'>
	      <label className='head'>5: Which of the following options aligns most with your interests?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Analyzing complex data sets and finding patterns" value="7D" checked={question5} setter={setquestion5} />
	      <RadioInput label="Designing and building innovative products or technologies" value="8E" checked={question5} setter={setquestion5} />
        <RadioInput label="Providing care and support to individuals in need" value="7H" checked={question5} setter={setquestion5} />
        <RadioInput label="Creating and performing artistic works" value="7A" checked={question5} setter={setquestion5} />
        </div>
        </div>
	    </div>

      <div className='questions' id='six'>
	      <label className='head'>6: When faced with a problem, how do you like to approach it?</label>
        <div className='layer'>
        <div className='option'>
	      <RadioInput label="Analyzing data and facts to find a logical solution" value="7D" checked={question6} setter={setquestion6} />
	      <RadioInput label="Talking to others and getting different perspectives" value="8C" checked={question6} setter={setquestion6} />
        <RadioInput label="Getting creative and trying new approaches" value="7A" checked={question6} setter={setquestion6} />
        <RadioInput label="Using technology or tools to find solutions" value="8E" checked={question6} setter={setquestion6} />
        </div>
        </div>
	    </div>
      
	    <button type="submit" id='submit'>Submit</button>
     </form>
     }
     <button id='next' onClick={nexthandler}>Next</button>
    </Fragment>
  )
}

export default Form