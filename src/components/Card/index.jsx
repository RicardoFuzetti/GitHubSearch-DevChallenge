import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { FaCodeBranch } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi'

import './styles.scss'

export default function Card(props) {
  return (

    <div className='container-card'>
      <strong>{props.name}</strong>
      <small>{props.description}</small>

      <div>
        <p> <AiFillStar className='icon' /> {props.stars} </p>
        <p> <FaCodeBranch className='icon' /> {props.froks} </p>
        <p> <BsFileEarmarkCodeFill className='icon' /> {props.language}</p>
        <a href={props.url}> <FiExternalLink className='icon' /></a>
      </div>

    </div>

  )
}