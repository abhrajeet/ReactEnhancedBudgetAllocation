import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch  } = useContext(AppContext);
    
    const changeCurrency = (value) => {

        const newCurrency = value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

};

    return (
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
      <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)} >
            <option defaultValue="£" name="pound">£ Pound</option>
            <option value="$" name="dollar"> $ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
      </select>
      </div>
    );
};
export default Currency;