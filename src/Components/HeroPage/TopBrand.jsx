import React from 'react'

const TopBrand = () => {
  return (
    <>

    <div className='bg-white mt-8 p-6'>
        <h1 className='font-bold pb-4 text-2xl text-[#DC143C]'>TOP BRAND</h1>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4'>
            <div className='productCard w-25 h-25'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjQLCwcVFdtDiXLzwxH9pXDVageYxRbxW5w&s" alt="" />
            </div>
            <div className='productCard w-25 h-25'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNuLtM07aQpWgPox9-t1zysy93xspF2Msvw&s" alt="" />
            </div>
            <div className='productCard w-25 h-25 bg-blend-darken'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgX5Xgbb67aZ5kvzXpiJXqUdF2t63HLq4zQg&s" alt="" />
            </div>
            <div className='productCard w-25 h-25 '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpc9teCamYJfnC8IHZXmLd7AoNlglvRpQcg&s" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default TopBrand