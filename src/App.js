import React, { useState } from 'react';
// import AddIcon from '@mui/icons-material/Add';
const App = () => {

  const [num, setNum] = useState(1);
  const incNum = () => {
    setNum(num + 1);
  }
  const decNum = () => {
    if (num > 0)
      setNum(num - 1);
    else {
      alert('sorry, not allow')
      setNum(0);
    }
  }
  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1> {num} </h1>
        <div className='btn_div'>
          <button onClick={incNum} className='btn_green'>
            Increm
          </button>
          <button onClick={decNum} className='btn_red'
          >Decrem
          </button>
        </div>
      </div>
    </div>
  )
};
export default App;

