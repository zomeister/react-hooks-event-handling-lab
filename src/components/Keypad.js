// Code Keypad Component Here

function Keypad (){
    function handleChange() {
        // e.preventDefault()
        // console.log(event.target.value)
        console.log('Entering password...')
    }
    // value="keypad text input"
    // placeholder="keypad text input"
    return (
        <div>
            <input
                type="password"
                onChange={handleChange}
                >
            </input>
        </div>
    )
}

export default Keypad;