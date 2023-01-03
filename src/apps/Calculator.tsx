import { useState } from "react";

interface ICharacter {
  id: number;
  value: string;
  type: string;
  customStyle: string;
}

const availableCharacters: ICharacter[] = [
  {
    id: 1,
    value: 'C',
    type: 'clear',
    customStyle: 'bg-neutral-700'
  },
  {
    id: 2,
    value: '÷',
    type: 'divide',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 3,
    value: '%',
    type: 'percentage',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 4,
    value: 'DEL',
    type: 'delete',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 5,
    value: '7',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 6,
    value: '8',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 7,
    value: '9',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 8,
    value: 'x',
    type: 'multiply',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 9,
    value: '4',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 10,
    value: '5',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 11,
    value: '6',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 12,
    value: '-',
    type: 'subtract',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 13,
    value: '1',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 14,
    value: '2',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 15,
    value: '3',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 16,
    value: '+',
    type: 'add',
    customStyle: 'bg-neutral-800'
  },
  {
    id: 17,
    value: '0',
    type: 'number',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 18,
    value: '.',
    type: 'decimal',
    customStyle: 'bg-neutral-900'
  },
  {
    id: 19,
    value: '=',
    type: 'equals',
    customStyle: 'col-span-2 bg-orange-600'
  },
];

export function Calculator() {
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState('');
  const [lastAction, setLastAction] = useState('');

  function executeAction() {
    let response: string | number = Number(result);

    switch (lastAction) {
      case 'add':
        response = Number(result) + Number(currentValue);
        console.warn(result);
        console.error(currentValue);
        break;

      case 'subtract':
        response = Number(result) - Number(currentValue);
        break;
      
      case 'multiply':
        response = Number(result) * Number(currentValue);
        break;

      case 'divide':
        response = Number(result) / Number(currentValue);
        break;

      case 'percentage':
        response = Number(result) * (Number(currentValue) / 100);
        break;
    }
    response = response.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    setResult(response);
    return response;
  }

  function handleInput(char: ICharacter) {
    switch (char.type) {
      case 'number':
        setCurrentValue(currentValue + char.value);
        break;

      case 'clear':
        setCurrentValue('');
        setResult('');
        setLastAction('');
        break;

      case 'delete':
        setCurrentValue(currentValue.slice(0, -1));
        break;

      case 'equals':
        const newResult = executeAction();
        setLastAction('');
        console.log(result);
        setCurrentValue(newResult);
        setResult('');
        break;

      case 'add':
        if (result) executeAction();
        else setResult(currentValue);
        setLastAction('add');
        setCurrentValue('');
        break;

      case 'subtract':
        if (result) executeAction();
        else setResult(currentValue);
        setLastAction('subtract');
        setCurrentValue('');
        break;

      case 'multiply':
        if (result) executeAction();
        else setResult(currentValue);
        setLastAction('multiply');
        setCurrentValue('');
        break;

      case 'divide':
        if (result) executeAction();
        else setResult(currentValue);
        setLastAction('divide');
        setCurrentValue('');
        break;

      case 'percentage':
        if (result) executeAction();
        else setResult(currentValue);
        setLastAction('percentage');
        setCurrentValue('');
        break;

      case 'decimal':
        if (currentValue.endsWith('.')) return;
        setCurrentValue(currentValue + char.value);
        break;
    }
  }

  return (
    <div className="rounded-md relative h-full w-full select-none px-1 text-neutral-100 py-4 flex flex-col items-center justify-between">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-3xl font-semibold">Calculadora</h1>
        <span className="px-2 py-1 text-xs font-medium bg-purple-500">v0.1 BETA</span>
      </div>

      <div className="w-full flex flex-col items-end px-4">
        <p className="max-w-full text-5xl overflow-x-auto overflow-y-hidden font-semibold">{currentValue || 0}</p>
        <span className="text-lg text-neutral-600 font-medium">{result || 0} { lastAction && availableCharacters.find((char) => char.type === lastAction).value}</span>
      </div>

      <div className="w-full grid grid-cols-4 grid-rows-auto">
        {availableCharacters.map(char => {
          return (
            <button type="button" onClick={() => handleInput(char)} className={`p-8 hover:brightness-125 cursor-pointer transition-all flex items-center justify-center font-medium ${char.customStyle}`} key={char.id}>
              <span className={`text-2xl`}>{char.value}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
};