import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

  return(
    <button className ="btn" onClick={onClick} style ={{backgroundColor:color}}>
    {text}
    </button>
  )
}

export default Button


Button.defaultProps = {
  color: 'steelblue',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
