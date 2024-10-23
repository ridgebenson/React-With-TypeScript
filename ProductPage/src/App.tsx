import ProductsWrapper from './components/ProductsWrapper';
import ShoeType from './components/ShoeType';
import ShoeDetails from './components/ShoeDetails';
import './App.css'

function App() {

  return (
    <div className="App">
      <ProductsWrapper
        shoeType={<ShoeType />}
        shoeDetails={<ShoeDetails />}
      />
    </div>
  )
}

export default App
