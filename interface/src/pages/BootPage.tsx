import chuSunIcon from './../assets/chuSun.svg';

export function BootPage() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-8'>
    <img src={chuSunIcon} />

    <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-semibold leading-snug text-neutral-100">ChuPhone</h1>
        <span className="text-neutral-500 text-lg">
          <strong className="text-[#EE6908]">C</strong>onectando {' '}
          <strong className="text-[#EE6908]">U</strong>suários 
        </span>
    </div>
  </div>
  );
};
