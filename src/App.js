import './App.css';
import TabHeader from './components/TabHeader';
import { useState } from 'react';

function App() {
  const [tabs,setTabs] = useState([
    {
      selected: false,
      content: "tab 1 content is showing here"
    },
    {
      selected: false,
      content: "tab 2 content is showing here"
    },
    {
      selected: false,
      content: "tab 3 content is showing here"
    },
  ])
  const handleClick = (clickedIndex) => {
    console.log(` you clicked tab ${clickedIndex} `);

    tabs.map((tabindex,i)=> {
      let t = tabindex;
      if (clickedIndex === i){
        t.selected = true
      }
      else{
        t.selected = false
      }
      setTabs([...tabs.slice(0,i),t].concat(tabs.slice(i+1)))
    })
  }

  return (
    <div className="App">
      {
        tabs.map((tab,i) => {
          return <TabHeader selected={tab.selected} index={i} handleClick={handleClick}/>
        })
      }
            {
        tabs.map((tab,i) => {
          return tab.selected ? <p>{tab.content}</p>: ""
        })
      }
      {/* <TabHeader selected={true} index={0} title="the best tab"/>
      <TabHeader selected={false} index={1} title="the best tab"/>
      <TabHeader selected={false} index={2} title="the best tab"/> */}

    </div>
  );
}

export default App;
