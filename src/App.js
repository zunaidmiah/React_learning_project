// import logo from './logo.svg';
import './App.css';
import './style.css';
// import Card from './components/Card';
// import Data from './data.json';
import Products from './components/Products';
import productsList from './products.json';
import CardClass from './components/CardClass';
import State from './components/State';
import FormRegister from './components/FormRegister';

function App() {
  // let cards = [];
  // step 1
  // for (let i = 0; i < Data.length; i++) {
  //   cards.push(<Card key={i} cardTitleText={Data[i].title} cardSubTitleText={Data[i].description} />);
  // }

  // Data.map((item, index) => {
  //   cards.push(<Card key={index} cardTitleText={item.title} cardSubTitleText={item.description} />);
  // });
  // end step 1

  // step 2
  // cards = Data.map((item, index) => <Card key={index} cardTitleText={item.title} cardSubTitleText={item.description} />);
  // end step 2
  return (
    <div className="App">

      {/* step 2 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {cards} */}
      {/* end step 2 */}



    
    <header className="App-header">
      <FormRegister />
      <h4>BD Store</h4>
      <Products productsList={productsList}/>
      <CardClass title="This title is from Card class component"/>
      <State />
    </header>






    </div>
  );
}

export default App;
