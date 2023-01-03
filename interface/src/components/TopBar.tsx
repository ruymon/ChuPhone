import { FaSignal } from 'react-icons/fa';
import { MdBatteryFull } from 'react-icons/md';

export function TopBar() {
  return (
    <div className="w-full h-fit flex items-center justify-between py-1 px-8 pt-2 text-white">
      <span className="text-sm font-medium">21:15</span>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className='text-xs font-medium'>5G</span>
          <FaSignal className="text-base" />
        </div>

        <div className="flex items-center">
          <span className='text-xs font-medium'>50%</span>
          <MdBatteryFull className="text-base" />
        </div>
      </div>
    </div>
  );
};
