import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import ItemForm from './components/Form/ItemForm'
import MenuForm from './components/Form/MenuForm'
import Hero from './components/Hero'
import MenuList from './components/Menu/MenuList'
import Navbar from './components/Navbar'
import { fetchMenuItems, fetchMenus } from './api/menuApi'
import Form from './components/Form/Form'
import MenuItem from './components/Menu/MenuItem'

function App() {
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [viewForm, setViewForm] = useState(false);

  useEffect(() => {
    const loadMenus = async () => {
        const response = await fetchMenus();
        setMenus(response.data);
    };
    loadMenus();
}, []);

useEffect(() => {
  const loadItems = async () => {
      if (selectedMenuId) {
          const response = await fetchMenuItems(selectedMenuId);
          setItems(response.data);
      }
  };
  loadItems();
}, [selectedMenuId]);

const handleMenuCreated = (newMenu) => {
    setMenus((prev) => [...prev, newMenu]);
};

  return (
    <div className='text-white font-oswald'>
      <Navbar />
      <Hero />
      <MenuList menus={menus} onSelect={setSelectedMenuId} />
      <MenuItem items={items} />
      <Footer />
      {
        // viewForm && 
          <Form 
            setItems={setItems}
            handleMenuCreated={handleMenuCreated} 
            selectedMenuId={selectedMenuId} 
          />
      }
      <div className='text-xs font-sans text-[#857878] text-center'>
          <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
          <div className='flex justify-center space-x-3'>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
          </div>
      </div>
    </div>
  )
}

export default App;