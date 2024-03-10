import { Signal, signal, useSignal } from "@preact/signals-react"

const bindInput = <T extends Signal>(signal: T): React.InputHTMLAttributes<HTMLInputElement> => {
  type SignalType = T extends Signal<infer U> ? U : never
  return {
    value: signal as SignalType,
    onChange: (event) => (signal.value = event.currentTarget.value)
  }
}

const text = signal("text")
function Input() {
  return <input type="text" {...bindInput(text)} />;
}

const count = signal(0)
setInterval(() => count.value++, 1000)
function Counter() {
  return <p>Value: {count}</p>;
}

function SignalCounter() {
  return (
    <div className="card">
      <p>
        signal text is: {text}
      </p>
      {Input()}
      {Counter()}
    </div>
  )
}

export default SignalCounter  