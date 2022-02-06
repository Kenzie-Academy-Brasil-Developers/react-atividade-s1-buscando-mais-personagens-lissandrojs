import './App.css';
import{useState,useEffect} from 'react'
import Characters from './components/Characters'
import Button from './components/ButtonPerson';
function App() {
  const [characterList,setcharacterList] = useState([])
  const [next,setNext]= useState(1)

  useEffect(()=> {fetch(`https://rickandmortyapi.com/api/character/?page=${next}`).then(resp =>resp.json()).then(resut =>setcharacterList(resut.results)).catch((err)=>console.log(err))},[next])


    const nextPerson=()=> {
      if(next <=42){

      
        setNext(next +1)
      }
    }

    const previousPerson =()=>{
      if(next > 1){
      setNext(next-1)
      }
    }
  return (
    <div >
          <Characters characterList={characterList}></Characters>
          <div className='container--btn'>
              <Button Children="Anterior" onClick={previousPerson}></Button>
              <Button Children="Proximo" onClick={nextPerson}></Button>
          </div>


    </div>
  );
}

export default App;