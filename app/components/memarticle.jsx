import React from 'react'

const Memarticle = (props) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <p>
              <span className="absolute inset-0"></span>
              {props.title}
            </p>
          </h3>
          <ul className="mt-5 line-clamp-100 text-sm leading-6 text-gray-600">
            <li>{props.text}</li>
            <li>{props.text1}</li>
            <li>{props.text2}</li>
            <li>{props.text3}</li>
            </ul>
        </div>
      </article>
  )
}

export default Memarticle