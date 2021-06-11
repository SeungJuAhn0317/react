import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const[data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8747c127d35b4274b5bd2baa4ce35adb',
      );
      setData(response.data);
    } catch(e){
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value = {JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App;
