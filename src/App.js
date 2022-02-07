// App is the PARENT COMPONENT of the application!

import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { makeUppercase } from './components/FunctionalComponent'
// for importing components, functions, variables etc. that are NOT the default export,
// wrap their names in curly brackets in the import statement

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <div>
        <ClassComponent />
        <ClassComponent />
        {/* <h3>GROCERY LIST</h3>
        <ul>
          <li>{makeUppercase('bread')}</li>
          <li>Milk</li>
          <li>Butter</li>
        </ul> */}
      </div>
      {/* <FunctionalComponent title='TITLE' subTitle='SUBTITLE' /> */}
      {/* <FunctionalComponent title='Hello' subTitle='World' /> */}
    </header>
  </div>
)

export default App

// PROPS -> stands for "properties"
// the props in react are a way of making a component DYNAMIC

// how can you create dynamic components, truly reusable lego blocks?
// passing props from a parent.
