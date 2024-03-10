import { Signal, useSignal } from "@preact/signals-react"

const bindInput = <T extends Signal>(signal: T): React.InputHTMLAttributes<HTMLInputElement> => {
  type SignalType = T extends Signal<infer U> ? U : never
  return {
    value: signal as SignalType,
    onChange: (event) => (signal.value = event.currentTarget.value)
  }
}

function SignalCounter() {
  const text = useSignal("text")
  return (
    <div className="card">
      <p>
        signal text is: {text}
      </p>
      <input type="text" {...bindInput(text)} />
    </div>
  )
}

export default SignalCounter  