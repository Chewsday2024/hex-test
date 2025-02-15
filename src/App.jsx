import { useEffect, useState } from "react"
import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  

  const [datas, setDatas] = useState([]);

  async function getDatas () {
    try {
      const res = await axios.get(`${baseUrl}`);
      

      setDatas(res.data.results);
      
    } catch (err) {
      console.log(err);
    }
  };

  
  
  useEffect(() => {
    getDatas();
    
  }, []);


  
         

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {datas.map(data => {
          return (
            <div className="col-md-4" key={data.dob.date}>
              <div className="bg-light p-3">
                <img
                  src={data.picture.large}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">{data.name.title}. {data.name.first} {data.name.last}</h2>
                <p className="mb-0">{data.email}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
