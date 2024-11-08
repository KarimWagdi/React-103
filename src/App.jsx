import Header from './components/Header/Header.jsx'
import Core_Concepts from './components/CoreConcepts/CoreConcepts.jsx'
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/TabButton/TabButoon.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';


function App() {
  const [oldValue , newValue] = useState('start point')

  function handleClick(buttonValue){
    for(let i=0 ; i<4 ; i++){
      if(EXAMPLES[i].title==buttonValue)
        newValue(i)
    }
    
  }
  return (
    <div>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <Core_Concepts 
            title = {CORE_CONCEPTS[0].title}
            paragraph = {CORE_CONCEPTS[0].description}
            img = {CORE_CONCEPTS[0].image}
          />
          <Core_Concepts 
            title = {CORE_CONCEPTS[1].title}
            paragraph = {CORE_CONCEPTS[1].description}
            img = {CORE_CONCEPTS[1].image}
          />
          <Core_Concepts 
            title = {CORE_CONCEPTS[2].title}
            paragraph = {CORE_CONCEPTS[2].description}
            img = {CORE_CONCEPTS[2].image}
          />
          <Core_Concepts 
            title = {CORE_CONCEPTS[3].title}
            paragraph = {CORE_CONCEPTS[3].description}
            img = {CORE_CONCEPTS[3].image}
          />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id='examples'>
          <h2> Examples </h2>
          <menu>
            <TabButton onClick={()=> handleClick('Component')}>Component</TabButton> 
            <TabButton onClick={()=> handleClick('Jsx')}>Jsx</TabButton>
            <TabButton onClick={()=> handleClick('Props')}>Props</TabButton>
            <TabButton onClick={()=> handleClick('State')}>State</TabButton>
          </menu>
          <h1>{oldValue}</h1>
        </section>
        <section id='tab-content'>
          <h2>Tab Content</h2>
          <ul>
            <div>{EXAMPLES[oldValue].title}{EXAMPLES[oldValue].description}</div>
            
            <code>{EXAMPLES[oldValue].code}</code>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
