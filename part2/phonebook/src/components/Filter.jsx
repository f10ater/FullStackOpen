const Filter = ({handleChange}) => {
    return (
    <p>Filter shown contacts with 
        <input onChange={(e) => handleChange('filter', e)}/>
    </p> )
}

export default Filter