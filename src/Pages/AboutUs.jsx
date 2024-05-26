import React from 'react'
import "../index.css"
import People from '../Components/AboutUsPage/People.jsx'
import MainPhoto from '../Components/AboutUsPage/MainPhoto.jsx'

const people = [
  {
    key:0, 
    name: "Imie1", 
    lastName: "Nazwisko", 
    imageSource: "./person.png", 
    department: "Zarząd", 
    description: "Lorem ipsum dolor sit amet"
  },
  {key:1, name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", department: "Zarząd", description: "Lorem ipsum dolor sit amet"},
  {key:2, name: "Imie", lastName: "Nazwisko", imageSource: "./person.png", department: "Zarząd", description: "Lorem ipsum dolor sit amet"},
  {key:3, name: "Jan1", lastName: "Kowalski", imageSource: "./person.png", department: "Promocja", description: "Lorem ipsum dolor123 sit amet"},
  {key:4, name: "Jan", lastName: "Kowalski", imageSource: "./person.png", department: "Informatyk", description: "Lorem ipsum dolor123 sit amet"},
  {key:5, name: "Jan", lastName: "Kowalski", imageSource: "./person.png", department: "Promocja", description: "Lorem ipsum dolor123 sit amet"},
  {key:6, name: "Jan", lastName: "Kowalski", imageSource: "./person.png", department: "Informatyk", description: "Lorem ipsum dolor123 sit amet"},
  {key:7, name: "Marian", lastName: "Kowalski", imageSource: "./person.png", department: "Członek", description: "Tylko sprząta"},
  {key:7, name: "Marian", lastName: "Kowalski", imageSource: "./person.png", department: "Członek", description: "Tylko sprząta"},
  {key:7, name: "Marian", lastName: "Kowalski", imageSource: "./person.png", department: "Członek", description: "Tylko sprząta"},
  {key:7, name: "Marian", lastName: "Kowalski", imageSource: "./person.png", department: "Członek", description: "Tylko sprząta"},
  {key:7, name: "Marian", lastName: "Kowalski", imageSource: "./person.png", department: "Członek", description: "Tylko sprząta"}
]



export default function AboutUs()
{
    return (
      <React.StrictMode>
        <MainPhoto></MainPhoto>
        <People peopleList={people}/>
      </React.StrictMode>
    )
}
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
      
//     </React.StrictMode>,
//   )
//   ReactDOM.createRoot(document.getElementById('header')).render(
// ,
//   )