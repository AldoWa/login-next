import Image from 'next/image';
import Saly from '../../public/saly.png'

export function SideContact() {
  return (
    <div className='bg-[#000842] rounded-2xl hidden xl:flex h-full items-center justify-center flex-col'>
      <div>
        <Image 
          src={Saly}
          alt='Saly boy sitting in a chair'
          width={521}
          height={521}
        />

        <div className='mt-20'>
          <h2 className='text-white text-4xl mb-2'>
            Sign in to name
          </h2>
          <span className='text-white text-xl font-light'>Lorem Ipsum is simply </span>  
        </div>
      </div>
    </div>
  );
}
