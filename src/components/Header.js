import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({onAdd, showAdd}) => {
  const location = useLocation()
  return(
    <>
      <header className="header">
        <h1>Hello, Becky</h1>
      	{location.pathname === '/' && (
      	<Button color={showAdd ? 'red':'green'}
      	text={showAdd ? 'Close': 'Add'}
      	onClick={onAdd}/>)}
      </header>
    </>
  )
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header


// <header>
// <h1 style= {{color: 'red', backgroundColor: 'black'}}> {title} </h1>
// </header>

// <header>
// <h1 style= {headingStyle}> {title} </h1>
// </header>


// <Button color='blue' text='Blue ranger'/>
// <Button color='red' text='Hey you'/>



// const onClick = () =>{
//   console.log('clicked');
// }

// <Button color='green' text='Add' onClick={onClick}/>
