const FunctionalComponent = (props) => {
  console.log("I'm functional component, hello!")
  console.log('these are the props', props)
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
    </div>
  )
}

export default FunctionalComponent

export const makeUppercase = (name) => name.toUpperCase()

// the default export can be only ONE per file!

// example with the props destructed
// const FunctionalComponent = ({ title, subTitle }) => {
//     console.log("I'm functional component, hello!")
//     console.log('these are the props')
//     return (
//       <div>
//         <h1>{title}</h1>
//         <h3>{subTitle}</h3>
//       </div>
//     )
//   }
