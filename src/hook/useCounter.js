import { useState } from 'react'

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState);
    const [step, setStep] = useState(1)

    const increment = () => {
        if (counter < initialState + 100) {
            setCounter(oldValue => oldValue + step)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter((oldValue) => oldValue - step)
        }
    }

    const reset = () => {
        setCounter(initialState)
    }

    const onChageStep = (e) => {
        setStep(Number(e.target.value))
    }

    return [counter, increment, decrement, reset, step, onChageStep]
}