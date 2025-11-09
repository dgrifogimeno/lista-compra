import { useState } from 'react'
import './App.css'
import { ListItem } from './ListItem.tsx'

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const onToggle = (checked: boolean) => {
    setIsChecked(!checked);
  };

  return (
    <>
      <ListItem name="Pa" checked={isChecked} onToggle={onToggle} /*onDelete={null}*/></ListItem>
      <ListItem name="Oli" checked={isChecked} onToggle={onToggle} /*onDelete={null}*/></ListItem>
      <ListItem name="Rosquilletes" checked={isChecked} onToggle={onToggle} /*onDelete={null}*/></ListItem>
      <ListItem name="Formatge" checked={isChecked} onToggle={onToggle} /*onDelete={null}*/></ListItem>
      <ListItem name="Fuet" checked={isChecked} onToggle={onToggle} /*onDelete={null}*/></ListItem> 
    </>
  )
}

export default App
