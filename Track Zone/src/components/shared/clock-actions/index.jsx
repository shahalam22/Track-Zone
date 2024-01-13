import { useState } from "react";

const defaultOffsets = [
    -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, -7.5, -7, -6.5, -6, -5.5, -5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4 ,4.5, 5, 5.5, 5.75, 6, 6.5
]

const ClockActions = ({local = false, clock, updateClock}) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if(name === 'offset'){
            value = parseInt(value)*60;
        }
        updateClock({
            [name]: value
        })
    }

    return (
        <div>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            { local ? <button>Create</button> : <button>Delete</button>}
            {
                isEdit && (
                    <div>
                        <input type="text" name="title" value={clock.title} onChange={handleChange}/>
                        <select name="timezone" value={clock.timezone} onChange={handleChange}>
                            <option value="GMT">GMT</option>
                            <option value="UTC">UTC</option>
                            <option value="PST">PST</option>
                            <option value="EST">EST</option>
                            <option value="BST">BST</option>
                            <option value="MST">MST</option>
                        </select>
                        {(clock.timezone === 'GMT' || clock.timezone === 'UTC') && (
                            <select name="offset" value={clock.offset/60} onChange={handleChange}>
                                {defaultOffsets.map(offset => (
                                    <option key={offset} value={offset}>{ offset }</option>
                                ))}        
                            </select>
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default ClockActions;