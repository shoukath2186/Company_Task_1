
import { MdArrowLeft,MdArrowRight } from "react-icons/md";


function PaginationSection({ setPageNo, data ,page,limit }) {

    const total = Math.ceil(parseInt(data?.data.totalDocs) / limit);

    
    const selectPage=(value)=>{
        setPageNo(value)
    }
    const handile=(action)=>{
        if(action=='inc'){
          if(page<total){
             setPageNo(page+1)
          }
        }else{
            if(page>1){
                setPageNo(page-1)
             }
        }

    }

    return (
        <div className='flex items-center'>
            <p className='text-[12px] text-gray-600 pr-5'>Displaying page</p>
            <div className='flex items-center justify-center border-[2px] border-red rounded-lg mr-3 hover:cursor-pointer' >
                <p className='px-1 py-1 text-[10px] border-gray-900 ' onClick={()=>setPageNo(1)}>First</p>
            </div>
            <div className='mr-4'>
                <div className='border-[2px] border-red rounded-lg flex hover:cursor-pointer'>
                    <div className='flex items-center justify-center border-r-[2px] border-red ' onClick={()=>handile('dic')}>
                    <MdArrowLeft color="#d6bf1a" />
                    </div>
                    {total &&
                        Array.from({ length: total }, (_, i) => (
                            <div key={i} onClick={()=>selectPage(i + 1)} className={`${page==i + 1 &&'bg-slate-200'} border-r-[2px] border-red`}>
                                <p className="px-2 py-1 text-[10px]">{i + 1}</p>
                            </div>
                        ))}



                    <div className='flex items-center justify-center ' onClick={()=>handile('inc')}>
                    <MdArrowRight color="#d6bf1a" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center border-[2px] border-red rounded-lg mr-10 hover:cursor-pointer' onClick={()=>setPageNo(total)} >
                <p className='px-1 py-1 text-[10px] border-gray-900 '>Last</p>
            </div>

        </div>
    )
}

export default PaginationSection