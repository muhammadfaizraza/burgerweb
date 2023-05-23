import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hNo, sethNo] = useState("");
  const [country, setcountry] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "addSippinginfo",
      payload: {
        hNo,
        country,
        phoneNo,
        pinCode,
        state,
        city,
      },
    });
    localStorage.setItem(
      "ShippingInfo",
      JSON.stringify({
        hNo,
        country,
        phoneNo,
        pinCode,
        state,
        city,
      })
    );
    navigate("/confirmorder");
  };

  return (
    <section className="shipping">
      <main>
        <h2>sHIPPING dETAILS </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>House No</label>
            <input
              type="text"
              value={hNo}
              onChange={(e) => sethNo(e.target.value)}
              placeholder="Enter House No"
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              placeholder="Enter City"
              required
            />
          </div>
          <div>
            <label>country</label>
            <select
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
            >
              <option value="">Country</option>
              {Country.getAllCountries().map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>
              <select value={state} onChange={(e) => setstate(e.target.value)}>
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option id={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <label>Pin Code</label>
            <input
              required
              type="text"
              placeholder="Enter Pin Code"
              value={pinCode}
              onChange={(e) => setpinCode(e.target.value)}
            />
          </div>
          <div>
            <label>phoneNo Number</label>
            <input
              required
              type="text"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
          <button type="submit">Confirm Order </button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
