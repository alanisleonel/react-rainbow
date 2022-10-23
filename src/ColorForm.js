import React, { useState } from 'react';

function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // Eliminate the default behaior of the form submittal
        e.preventDefault()
        // function addColor should be available within props.
        props.addColor(input)
    }

    return (
        <div>
            {/* next line invokes handleSubmit function */}
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm