import React, { useState, useEffect } from 'react';
import './Checkbox.css'

const Checkbox = ({checked, setChecked, label}) => {

    const [on, setOn] = useState(checked);

    useEffect(() => {
        setOn(checked)
    }, [checked])

    return (
        <label className="knightley-checkbox">{label}
            <input type="checkbox" checked={on} onChange={(e) => setChecked(e)} />
            <span className="checkmark"></span>
        </label>
    )
}

export default Checkbox;
