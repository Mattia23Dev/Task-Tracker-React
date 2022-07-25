import Button from './button'

const Header = ({ onAdd, showAdd }) => {
    return (
        <header style= {headingStyle}>
            <h1 style={{position: 'relative',
                        bottom: '50px'}}>
                Task Tracker
            </h1>
            <Button 
            text={showAdd ? 'close' : 'Add'}
            color={showAdd ? 'red' : 'green'} 
            onClick= {onAdd} />
        </header>
    )
}

const headingStyle = {
    margin: '100px 0',
    display: 'flex',
}

export default Header