import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { DataProvider } from './context/DataContext';
import Items from './components/Items';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Search from './components/Search';

function App() {
  return (
    <div className='container p-2'>
    <DataProvider>
      <div className='row'>
        <div className='col'>
        <Header />
        </div>
      
      </div>
      <div className='row'>
      <div className='col'>
      <Search />
        </div>
      </div>
      <div className='row'>      
      <Routes>
        <Route path='/' Component={Items}/>
        <Route path='/add' Component={ AddItem }></Route>
        <Route path='/edit' Component={ EditItem }></Route>
      </Routes>
      </div>
    
    </DataProvider>
    </div>
  );
}

export default App;
