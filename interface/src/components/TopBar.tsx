import { FaSignal } from 'react-icons/fa';
import { MdBatteryFull } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { usePlayStore } from '../hooks/usePlayStore';

export function TopBar() {
  const { apps } = usePlayStore();
  const location = useLocation();

  const currentApp = apps.find(app => app.routePath === location.pathname);
  const accentColor = currentApp?.useDarkShell ? 'text-neutral-900' : 'text-neutral-100';

  return (
    <div className={`w-full h-fit flex items-center justify-between py-1 px-8 pt-2 ${accentColor}`}>
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
