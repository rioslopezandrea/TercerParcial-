import React, { useState } from 'react'
import sum from '../utils/sum'

export const Sumador = () => {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [result, setResult] = useState(0)

  const onClickSum = () => {
    let result = sum(firstValue, secondValue)
    console.log(result)
    setResult(result)
  }

  return (
    <div>
      <div>
        <div className="mb-3 form-group">
          <label htmlFor="first-value" className="form-label">
            Primer valor
          </label>
          <input
            type="number"
            className="form-control"
            id="first-value"
            aria-describedby="firtsValue"
            onChange={(e) => setFirstValue(e.currentTarget.value)}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="second-value" className="form-label">
            Segundo valor
          </label>
          <input
            type="number"
            className="form-control"
            id="second-value"
            aria-describedby="secondValue"
            onChange={(e) => setSecondValue(e.currentTarget.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={() => onClickSum()} >
          Sumar
        </button>
      </div>
      {result !== 0 && (
        <div>
          <h1>El resultado es: {result}</h1>
        </div>
      )}
    </div>
  )
}