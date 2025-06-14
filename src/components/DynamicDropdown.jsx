function DynamicDropdown(props) {
    const options = props.item
    const optionCategory = props.name
         
     function handleChange(event){       
        props.onData(event.target.value)
     }
     
    return (
        <div>
            <select  onChange={handleChange} className='border w-full'>
                <option value=""> {optionCategory}</option>
                {options.map(option =>
                    <option key ={option.value} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    )    
}

export default DynamicDropdown
