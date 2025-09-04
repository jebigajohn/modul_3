import React, { useState } from 'react'

export default function Faq() {
  const [text, setText] = useState<boolean>(false)
  const [longText, setLongText] = useState<boolean>(false)

  return (
    <div className="flex w-md justify-between items-center flex-col mb-10">
      <div className="flex w-md justify-between items-center">
        <p>Why is React great?</p>
        <button onClick={() => setText((text) => !text)}>
          {text ? 'Hide short answer' : 'Show short answer'}
        </button>
      </div>

      {text && (
        <>
          <div className="flex w-md justify-between items-center mt-5">
            <div id="answer">Fast learning curve</div>

            <button onClick={() => setLongText((text) => !text)}>
              {longText ? 'Hide long answer' : 'Show long answer'}
            </button>
          </div>

          {longText && (
            <div className="mt-2">
              React is a very simple and lightweight library that only deals
              with the view layer. It is not a beast like other MV* frameworks
              such as Angular or Ember. Any JavaScript developer can understand
              the basics and start developing an awesome web application after
              only a couple of days reading tutorials. As the React guide says,
              “Thinking in React” may be a little different than you are used to
              since it brings a new approach to the table, but it will become
              much easier and natural as you gain experience with it.
            </div>
          )}
        </>
      )}
    </div>
  )
}
