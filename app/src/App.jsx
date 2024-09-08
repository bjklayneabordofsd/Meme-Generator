import React from "react"
import Header from "./components/Header"
import './index.css'

export default function App() {
  // const dataElements = data.map(element => {
  //   return (
  //     <Card 
  //         element = {element} //or {...item} ES6 version remove the .item in Card Component
  //     />
  //   )
  // })
  return (
      <div className='Parent-Container'>
        <Header />
        {/* <section>
          {dataElements}
        </section> */}
      </div>
  )
}
