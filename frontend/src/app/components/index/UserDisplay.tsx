import React, {useState} from 'react';

type Props = {
  uniqueId: string;
  displayName: string;
};



const UserDisplay = (props: Props) => {

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () =>{
    navigator.clipboard.writeText(props.uniqueId);
    setCopySuccess(true);
  };
  return (
    <div className='bg-transparent p-3 min-h-fit flex flex-row gap-1 w-full'>
      <div className='w-1/2 min-h-fit border-double border-4 border-gold flex flex-col md:items-center justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your ID is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold break-words'>
          {props.uniqueId}
        </h2>
        <button onClick={handleCopyClick} className='text-white bg-gold font-vt323 font-semibold p-1 m-1'>
          {copySuccess ? 'Copied!' : 'Copy ID'}
        </button>
      </div>
      <div className='w-1/2 min-h-fit border-double border-4 border-gold flex flex-col md:flex-row items-center justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your name is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold break-words'>
          {props.displayName}
        </h2>
      </div>
    </div>
  );
};

export default UserDisplay;
