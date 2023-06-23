import React, { useState } from 'react';
import{ faker }from '@faker-js/faker';

type Props = {
  onNameSubmit: (name: string) => void;
};

const UsernameForm = ({ onNameSubmit }: Props) => {
  const [name, setName] = useState('');

  const generateRandomName = () => {
    let randomName = '';
    while (randomName.length > 12 || randomName.length === 0) {
      randomName = faker.name.firstName();
    }
    return randomName;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRandomName = () => {
    const randomName = generateRandomName();
    setName(randomName);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNameSubmit(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center my-1'>
          <label htmlFor="displayName" className='text-white font-vt323 m-1'>Adventurer name:</label>
          <input
            type="text"
            id='displayName'
            className='bg-gray-400 text-white font-electrolize font-semibold bg-opacity-30 p-1 border-double border-4 border-gold text-center'
            maxLength={12}
            value={name}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleRandomName}
            className='text-white bg-gold font-vt323 font-semibold p-1 m-1'
          >
            Generate Random Name
          </button>
          <input
            type="submit"
            value="Enter"
            className='text-white bg-gold font-vt323 font-semibold p-1 m-1'
          />
        </div>
      </form>
    </div>
  );
};

export default UsernameForm;
