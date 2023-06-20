import React from 'react';

type Props = {
  uniqueId: string;
  displayName: string;
};

const UserDisplay = (props: Props) => {
  return (
    <div className='bg-transparent p-3 min-h-fit flex flex-row gap-1 w-full'>
      <div className='w-1/2 min-h-fit border-double border-4 border-gold flex flex-col justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your ID is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold break-words'>
          {props.uniqueId}
        </h2>
      </div>
      <div className='w-1/2 min-h-fit border-double border-4 border-gold flex flex-col justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your name is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold break-words'>
          {props.displayName}
        </h2>
      </div>
    </div>
  );
};

export default UserDisplay;
