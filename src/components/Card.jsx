import clock from '../assets/images/icon-clock.svg'
import etherium from '../assets/images/icon-ethereum.svg'
import view from '../assets/images/icon-view.svg'
import avatar from '../assets/images/image-avatar.png'
import imgprincipal from '../assets/images/image-equilibrium.jpg'
const Card = () => {
  return (
    <div className='w-[20.625rem] h-[34.375rem] bg-[#15273F] rounded-2xl p-5'>
      <div className='relative flex items-center justify-center group hover:bg-[#0AFFFF] transition-colors duration-500 rounded-lg cursor-pointer'>
        <img src={view} alt='' className='absolute hidden group-hover:block' />
        <img src={imgprincipal} alt='' className='rounded-lg group-hover:opacity-25' />
      </div>
      <h2 className='text-white mt-5 mb-2 text-xl font-semibold hover:text-[#0AFFFF]'>
        Equilibrium #3429
      </h2>
      <p className='text-gray-500 font-normal text-lg'>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className='flex items-center justify-between mt-3 font-semibold border-b border-gray-600 pb-6 '>
        <div className='flex items-center gap-2'>
          <img src={etherium} alt='' />
          <p className='text-[#0AFFFF]'>0.041 ETH</p>
        </div>
        <div className='flex items-center gap-1'>
          <img src={clock} alt='' />
          <p className='text-[#8BAAD9]'>3 days left</p>
        </div>
      </div>

      <footer className='flex items-center gap-4 mt-4'>
        <img src={avatar} alt='' className='w-9 ring-2 ring-white  h-9 rounded-full' />
        <p className='text-[#8BAAD9] hover:text-[#0AFFFF]'>
          Creation of <span className='text-white'> Jules Wyvern</span>
        </p>
      </footer>
    </div>
  )
}
export default Card
