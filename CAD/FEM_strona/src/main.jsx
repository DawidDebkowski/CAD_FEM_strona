import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Person from './person.jsx'
import People from './People.jsx'

const people = [
  {name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {name: "Jan", lastName: "Kowalski", imageSource: "./person.png", description: "Lorem ipsum dolor123 sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <People peopleList={people}/>
  </React.StrictMode>,
)
