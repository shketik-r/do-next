// import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

// const cats = ['Пиццы', 'Салаты', 'Супы', 'Горячее', 'Напитки', 'Десерты'];
// const activeIndex = 0;

export const CategoriesProduct: React.FC<Props> = ({ className  }) => {
  return (

    <>
    </>

    // <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
    //   {
    //     cats.map((cat:string, index) => {
    //       return (
    //         <button
    //           className={cn('flex items-center font-bold h-11 rounded-2xl px-5', index === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary')}
    //           key={index}>
    //           <span>{cat}</span>
    //         </button>
    //       )
    //     })
    //   }

    // </div>
  );
};