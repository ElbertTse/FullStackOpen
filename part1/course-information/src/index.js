import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => // render course name
{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) =>
{
  return(
    <div>
      <p>{props.name} {props.num}</p>
    </div>
  )
}

const Content = (props) => // render course parts and num exercises
{
  return(
    <div>
      <Part name = {props.p1Name} num = {props.p1Exer} />
      <Part name = {props.p2Name} num = {props.p2Exer} />
      <Part name = {props.p3Name} num = {props.p3Exer} />
    </div>
  )
}

const Total = (props) =>
{
  return(
    <div>
      <p>Number of exercises {props.p1Exer + props.p2Exer + props.p3Exer}</p>
    </div>
  )
}

const App = () => 
{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content p1Name = {part1} p1Exer = {exercises1} p2Name = {part2} p2Exer = {exercises2} p3Name = {part3} p3Exer = {exercises3} />
      <Total p1Exer = {exercises1} p2Exer = {exercises2} p3Exer = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))