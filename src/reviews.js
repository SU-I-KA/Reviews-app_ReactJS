import react, {useState} from 'react';
import people from './data';
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Reviews = ()=> {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];
    
    const checkIndex = (number)=>{
        if(number > people.length-1){
            return 0
        }
        if(number < 0){
            return people.length-1
        }
        return number
    };

    const nextPerson = ()=> {
        const newIndex = index + 1;
        setIndex(checkIndex(newIndex));
    };

    const previousPerson = ()=>{
        const newIndex = index - 1;
        setIndex(checkIndex(newIndex));
    }

    const surprise = ()=>{
        let random = Math.floor(Math.random() * people.length);
        if(random === index){
            random = index + 1;
        }
        setIndex(checkIndex(random));
        console.log(index);
    }
    return(
        <div className='review-wrap'>
          <div className='img-wrap'>
            <div className='image'>
              <img src={image} alt={name} />
              <span className='right-quote'>
                  <FaQuoteRight />
              </span>
            </div>
          </div>
          <div className='name-job'>
              <h3>{name}</h3>
              <p>{job}</p>
          </div>
          <div className='info'>
              <p>{text}</p>
          </div>
          <div className='btn-wrap'>
              <button className='prev-btn' onClick={previousPerson}>
                  <FaChevronLeft />
              </button>
              <button className='nex-btn' onClick={nextPerson}>
                  <FaChevronRight />
              </button>
          </div>
          <button className='surp-btn' onClick={surprise}>surprise me</button>
        </div>
    )
}

export default Reviews;