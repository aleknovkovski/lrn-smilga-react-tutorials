import React, {useState} from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeopleArr = people.filter((person) => {
      return person.id !== id
    });
    setPeople(newPeopleArr);
  };

  function clearPeopleList () {
    setPeople([]);
  }

  return (
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
              <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={() => removePerson(id)}>remove</button>
              </div>
          );
        })}
        <button
            className='btn'
            onClick={clearPeopleList}
        >
          clear items
        </button>
      </div>
  );
};

export default UseStateArray;
