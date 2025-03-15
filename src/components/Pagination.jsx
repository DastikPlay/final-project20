import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center gap-[10px] my-[50px]'>
    <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>1</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>2</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>3</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>4</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>5</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>...</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <p className='py-[5px] h-[32px] px-[11px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'>50</p>
              </div>
              <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
                <img className='p-[9.9px] w-[32px] h-[32px] hover:border border-[#6F73EE] hover:text-[#6F73EE] hover:rounded-[5px] transition'  alt="" />
              </div>
    </div>
  )
}

export default Pagination