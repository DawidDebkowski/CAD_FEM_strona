import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import People from './People.jsx'
import Header from './Header.jsx'

const people = [
  {key:0, name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", department: "Zespół", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {key:1, name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", department: "Zarząd", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {key:2, name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", department: "Zarząd", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {key:3, name: "Jan", lastName: "Kowalski", imageSource: "./person.png", department: "Zespół", description: "Lorem ipsum dolor123 sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"},
  {key:4, name: "Jan", lastName: "Kowalski", imageSource: "./person.png", department: "Zespół", description: "Lorem ipsum dolor123 sit amet consectetur adipisicing elit. Tempore facere blanditiis illo distinctio autem possimus praesentium optio ad error consectetur corrupti iusto, obcaecati vero voluptates recusandae reiciendis repellendus nisi aspernatur?"}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <People peopleList={people}/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>,
)
