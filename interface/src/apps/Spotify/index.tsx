import { useState } from 'react';
import { AiFillHeart, AiFillHome, AiOutlineBell, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { BiLibrary } from 'react-icons/bi';
import { IoPlaySharp } from 'react-icons/io5';
import { TbDeviceSpeaker } from 'react-icons/tb';
import likedSongsBanner from './../../assets/apps/spotify/liked-songs.png';


export function Spotify() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-md relative h-full w-full select-none px-6 text-neutral-100 py-4 flex flex-col gap-6 max-h-[48rem] overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">Bom dia</h1>
        <div className="flex items-center">
          <button type="button" className='p-2 rounded-lg hover:bg-neutral-900 transition-all text-2xl relative'>
            <span className='absolute top-2 left-3 w-2 h-2 bg-[#4C549C] rounded-full' />
            <AiOutlineBell />
          </button>

          <button type="button" className='p-2 rounded-lg hover:bg-neutral-900 transition-all text-2xl'>
            <AiOutlineSetting />
          </button>
        </div>
      </div>

      <div className='flex items-center gap-2 overflow-x-auto overflow-y-hidden'>
        <button type='button' className='px-4 py-1 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all'>Músicas</button>
        <button type='button' className='px-4 py-1 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all'>Podcast & Shows</button>
      </div>
      
      <div className='flex flex-col items-center gap-4 w-full'>
        <button className='bg-neutral-900 hover:bg-neutral-800 transition-all rounded-md flex items-center gap-1 w-full'>
          <img className='w-16 h-16 object-cover rounded-l-md' src={likedSongsBanner} alt="Album cover" />
          <span className='px-4 text-lg font-medium'>Músicas curtidas</span>
        </button>

        <div className='bg-neutral-900 hover:bg-neutral-800 transition-all rounded-md flex items-center gap-1 w-full'>
          <img className='w-16 h-16 object-cover rounded-l-md' src="https://s2.glbimg.com/AVZFfrFhiMvnAhtK914y_lsF6bY=/0x0:1200x800/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/03/31/cut38.png" alt="Album cover" />
          <span className='px-4 text-lg font-medium'>Vintage Culture</span>
        </div>

        <div className='bg-neutral-900 hover:bg-neutral-800 transition-all rounded-md flex items-center gap-1 w-full'>
          <img className='w-16 h-16 object-cover rounded-l-md' src="https://gerenciador.popload.com.br/wp-content/uploads/2022/10/141022_redhot.jpeg" alt="Album cover" />
          <span className='px-4 text-lg font-medium'>Red Hot Chilli Peppers</span>
        </div>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <span className='text-2xl font-bold'>Recently Played</span>

        <div className='flex gap-4 max-w-full overflow-x-auto'>
          <button type="button" className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://i.scdn.co/image/ab67616d0000b273579b9602ae484950d95d0ab8'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Unlimited Love</span>
              <span className='text-sm text-neutral-300'>Red Hot Chilli Peppers</span>
            </div>
          </button>

          <button type="button" className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://upload.wikimedia.org/wikipedia/pt/thumb/4/48/Imunidade_Musical.jpg/220px-Imunidade_Musical.jpg'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Imunidade Musical</span>
              <span className='text-sm text-neutral-300'>Charlie Brown Jr.</span>
            </div>
          </button>

          <button type='button' className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://media.pitchfork.com/photos/5c0e97974ea64e2d98092eaa/1:1/w_600/avril%20lavigne_let%20go.jpg'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Let Go</span>
              <span className='text-sm text-neutral-300'>Avril Lavigne</span>
            </div>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <span className='text-2xl font-bold'>Recently Played</span>

        <div className='flex gap-4 max-w-full overflow-x-auto'>
          <button type="button" className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://i.scdn.co/image/ab67616d0000b273579b9602ae484950d95d0ab8'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Unlimited Love</span>
              <span className='text-sm text-neutral-300'>Red Hot Chilli Peppers</span>
            </div>
          </button>

          <button type="button" className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://upload.wikimedia.org/wikipedia/pt/thumb/4/48/Imunidade_Musical.jpg/220px-Imunidade_Musical.jpg'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Imunidade Musical</span>
              <span className='text-sm text-neutral-300'>Charlie Brown Jr.</span>
            </div>
          </button>

          <button type='button' className='flex flex-col gap-3 min-w-[8rem] text-left'>
            <img className='w-32 h-32 object-cover' src={'https://media.pitchfork.com/photos/5c0e97974ea64e2d98092eaa/1:1/w_600/avril%20lavigne_let%20go.jpg'} alt="Album cover" />
            <div className='flex flex-col'>
              <span className='text-lg font-medium text-neutral-100 '>Let Go</span>
              <span className='text-sm text-neutral-300'>Avril Lavigne</span>
            </div>
          </button>
        </div>
      </div>

      <div className='w-full rounded-md flex p-2 items-center justify-between bg-neutral-700 sticky z-20 bottom-8 absolute left-0'>
        <div className='flex items-center gap-2'>
          <img className="w-10 h-10 object-cover rounded-md" src="https://i.scdn.co/image/ab67616d0000b273579b9602ae484950d95d0ab8" />
          <div className='flex flex-col'>
            <span className='font-medium text-neutral-100 leading-5'>Black summer</span>
            <span className='text-sm text-neutral-300'>Red Hot Chilli Peppers</span>
          </div>
        </div>


        <div className='flex items-center gap-3 text-2xl'>
          <TbDeviceSpeaker />
          <AiFillHeart className='text-green-500'/>
          <IoPlaySharp />
        </div>
      </div>

      <div className="bg-gradient-to-t from-black to-black/0 pt-4 flex items-center gap-16 justify-center sticky z-10 -bottom-4 absolute left-0">
        <div className='flex flex-col items-center gap-1'>
          <AiFillHome className='text-xl'/>
          <span className='text-xs'>Home</span>
        </div>

        <div className='flex flex-col items-center gap-1 self-center'>
          <AiOutlineSearch className='text-xl'/>
          <span className='text-xs'>Buscar</span>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <BiLibrary className='text-xl'/>
          <span className='text-xs'>Biblioteca</span>
        </div>
      </div>
    </div>
  );
};