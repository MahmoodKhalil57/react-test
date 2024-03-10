import { useState } from "react"

function StateCounter() {
  console.log("🚀 ~ StateCounter ~ StateCounter")

  const [text, setText] = useState("text")

  return (
    <div className="card">
      <p>
        state text is: {text}
      </p>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
    </div>
  )
}

export default StateCounter