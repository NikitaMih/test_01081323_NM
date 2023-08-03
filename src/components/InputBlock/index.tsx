import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetLocomotive, selectLocomotive, selectCount } from '../../slices/block';
import { writeBlockInArr, sortBlockInArr } from '../helper';
import './style.scss';

function InputBlock() {

  const dispatch = useDispatch();
  const locomotive = useSelector(selectLocomotive);
  const currentCount = useSelector(selectCount);

  const [count, SetCount] = useState(1);
  const [color, SetColor] = useState('#1C1C1C');

  const saveBlock = () => {
    const id = Math.random();
    const newLoco = writeBlockInArr(id, locomotive, color, count);
    dispatch(SetLocomotive(newLoco));
    if (currentCount - count < 0) {
      alert('The maximum possible number of blocks is 100, blocks have been added that do not go beyond the allowed limit');
    };
  };

  const sortBlock = () => {
    const newLoco = sortBlockInArr(locomotive);
    dispatch(SetLocomotive(newLoco));
  };

  //Handlers
  const handleCount = (value: number) => {
    SetCount(value);
  };

  const handleColor = (value: string) => {
    SetColor(value);
  };

  const handleSubmit = (key: string) => (key === "Enter") && saveBlock();

  return (
    <div className='input-blocks'>
      <div className='input-block'>
        <input className='input-blocks__color' type="color" value={color} onChange={(event) => handleColor(event.target.value)}/>
        <label>Choose color</label>
      </div>
      <div className='input-block'>
        <input
            className='input-blocks__number'
            type='number'
            min={1}
            max={100}
            value={count} 
            onChange={(event) => handleCount(+event.target.value)}
            onKeyDown={(event) =>handleSubmit(event.key)}
          />
      </div>
      <div className='input-block'>
        <button className='input-blocks__save' onClick={saveBlock}>SAVE</button>
        <button className='input-blocks__sort' onClick={sortBlock}>SORT</button>
      </div>
    </div>
  );
};

export default InputBlock;
