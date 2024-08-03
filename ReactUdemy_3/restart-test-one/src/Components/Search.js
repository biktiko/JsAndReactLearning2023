import {useState} from 'react'

const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
]

const Search = () => {

    const [filtredList, setFilterList] = useState(list);

    const handleSearch = event => {
      if(event.target.value===""){
        setFilterList(list);
        return;
      }
  
      setFilterList(list.filter(item => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1))
    }
    return (
        <div>
            <h1>Exercise 1</h1>
            <div>
                Search: <input type='text' onChange={handleSearch}/>
            </div>
            <div>
                {filtredList && filtredList.map((element, index) => (
                <div key={index}>{element}</div>
                ))}
            </div>
        </div>
    )
}

export default Search