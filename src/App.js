import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [issort, setIsSort] = useState(false);
  const [tabledata, setTableData] = useState([]);

  const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

const handlesortbydate = () => {
  console.log("clicked")

  setIsSort((prevValue) => !prevValue);
  console.log(issort);
  if(!issort) {
    data.sort((a,b) => a.date >b.date);
    console.log(data);
    setTableData(data)
  }
  else {
    data.sort((a,b) => b.date <a.date);
    console.log(data);
    setTableData(data)
  }
}


const handlesortbyViews = () => {
  console.log("clicked views")

  setIsSort((prevValue) => !prevValue);
  console.log(issort);
  if(!issort) {
    data.sort((a,b) => a.views -b.views);
    console.log(data);
    setTableData(data)
  }
  else {
    data.sort((a,b) => b.views -a.views);
    setTableData(data)
  }
}

useEffect(() => {
  setTableData(data)
},[])

  return (
    <div >
      <h1>Date and Views Table</h1>
      <button onClick={handlesortbydate}>Sort by Date</button>
      <button onClick={handlesortbyViews}>Sort by Views</button>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>
         {
          tabledata &&  tabledata.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            
            )) 
         } 
        </tbody>
      </table>
    </div>
  );
}

export default App;
