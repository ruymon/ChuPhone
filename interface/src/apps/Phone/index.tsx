interface PhoneProps {};
import { ReactNode, useState } from 'react';
import { BsVoicemail } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineBackspace, HiOutlineDotsVertical } from 'react-icons/hi';

interface ICharacter {
  id: number;
  value: string;
  alphanumericValue: string | ReactNode;
}

const availableCharacters: ICharacter[] = [
  {
    id: 1,
    value: '1',
    alphanumericValue: <BsVoicemail className='text-lg'/>
  },
  {
    id: 2,
    value: '2',
    alphanumericValue: 'ABC'
  },
  {
    id: 3,
    value: '3',
    alphanumericValue: 'DEF'
  },
  {
    id: 4,
    value: '4',
    alphanumericValue: 'GHI'
  },
  {
    id: 5,
    value: '5',
    alphanumericValue: 'JKL'
  },
  {
    id: 6,
    value: '6',
    alphanumericValue: 'MNO'
  },
  {
    id: 7,
    value: '7',
    alphanumericValue: 'PQRS'
  },
  {
    id: 8,
    value: '8',
    alphanumericValue: 'TUV'
  },
  {
    id: 9,
    value: '9',
    alphanumericValue: 'WXYZ'
  },
  {
    id: 10,
    value: '*',
    alphanumericValue: ''
  },
  {
    id: 11,
    value: '0',
    alphanumericValue: '+'
  },
  {
    id: 12,
    value: '#',
    alphanumericValue: ''
  }
];

export function Phone({}: PhoneProps) {
  const [dialedNumber, setDialedNumber] = useState<string>('');

  function handleCharacterClick(character: ICharacter) {
    setDialedNumber((prev) => prev + character.value);
  }

  function handleBackspaceClick() {
    setDialedNumber((prev) => prev.slice(0, -1));
  }

  return (
    <div className="h-full w-full px-8 text-neutral-100 py-4 flex flex-col justify-between">
      <span className='text-lg'>Telefone</span>

      <div className='flex flex-col items-center gap-4'>
        <div className='w-full flex items-center justify-between'>
          <button type='button' className='p-2 rounded-lg text-xl text-neutral-500 hover:text-neutral-100 hover:bg-neutral-800 transition-all flex items-center justify-center'>
            <HiOutlineDotsVertical />
          </button>

        
          <span className='font-medium text-3xl'>{dialedNumber}</span>

          <button type='button' onClick={handleBackspaceClick} className='p-2 rounded-lg text-xl text-neutral-500 hover:text-neutral-100 hover:bg-neutral-800 transition-all flex items-center justify-center'>
            <HiOutlineBackspace />
          </button>
        </div>

        <div className="w-full grid grid-cols-3 grid-rows-auto gap-4 pt-2 border-t border-neutral-800">
          {availableCharacters.map(({ id, value, alphanumericValue}) => (
            <button
              type="button"
              onClick={() => handleCharacterClick({ id, value, alphanumericValue })}
              key={id}
              className="flex flex-col justify-center items-center p-2 rounded-lg hover:bg-neutral-800 hover:cursor-pointer"
            >
              <span className="text-3xl font-semibold">{value}</span>
              <span className="text-xs text-neutral-400">{alphanumericValue}</span>
            </button>
          ))}
        </div>

        <button className='w-fit rounded-full bg-green-700 text-white flex items-center gap-2 p-4 hover:bg-green-600 transition-all'>
          <FiPhoneCall className="text-xl" />
          <span className='font-medium'>Ligar</span>
        </button>
      </div>
    </div>
  );
};
