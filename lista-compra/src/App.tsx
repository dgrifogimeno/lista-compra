import './App.css'
import { ListItem } from './ListItem'
import { AddForm } from './AddForm';
import { useState } from 'react'

type Item = {
  id: number;
  name: string;
  checked: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Pa", checked: false },
    { id: 2, name: "Oli", checked: false },
    { id: 3, name: "Rosquilletes", checked: false },
    { id: 4, name: "Formatge", checked: false },
    { id: 5, name: "Fuet", checked: false },
  ]);

  const [itemId, setItemId] = useState(items.length + 1);

  const handleAdd = (name: string) => {
    setItems([...items, { id: itemId, name, checked: false }]);
    setItemId(itemId + 1);
  };

  const handleDelete = (idDelete: number) => {
    setItems((items: Item[]) => items.filter((item: Item) => item.id !== idDelete));
    setItemId(itemId - 1);
  }

  console.log("Items ids: ", items.map(item => item.id));

  return (
    <>
      {items.map(item => (
        <ListItem id={item.id} name={item.name} checked={item.checked} onDelete={handleDelete} />
      ))}
      <AddForm onAdd={handleAdd} />
    </>
  )
}

export default App
