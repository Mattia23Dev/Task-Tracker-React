import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return(
    <button 
    onClick={onClick}
    style={{backgroundColor: color}} className="btn btn-add">
        {text}
    </button>
    )
}

export default Button