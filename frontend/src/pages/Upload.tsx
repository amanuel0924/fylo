import React,{useRef,useState} from 'react'
import fileIlustration from '../assets/fileIlustration.svg'
import { postRequest } from '../utils/requests'



export const Upload:React.FC = () => {
  const wraperRef = useRef<HTMLDivElement>(null)
  const [description,setDescription] = useState('')
  const formData:FormData = new FormData();
  const [file,setFile] = useState<File | null>(null)

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wraperRef.current?.classList.add('opacity-50');
  };

  const handleDragLeave = () => {
    wraperRef.current?.classList.remove('opacity-50');
  };

  const onDropHandler = () => {
    wraperRef.current?.classList.remove('opacity-50');
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.append('file',file as Blob)
    formData.append('description',description)
    postRequest('http://localhost:3031/api/files/',formData)
    setDescription('')
    setFile(null)
 
  }

 

  return (
    <div className='container  mt-6 h-screen  shadow-lg mx-auto'>
        <form onSubmit={onsubmitHandler} className='flex flex-col mx-6  border-4 p-2 '  >
           <div ref={wraperRef} onDragEnter={handleDragEnter} onDragStart={handleDragEnter} onDragLeave={handleDragLeave} onDrop={onDropHandler}   className='w-[500px] border-dashed border-4 border-gray-600  rounded-lg relative flex items-center justify-center bg-teal-50 hover:cursor-pointer hover:opacity-50 '>
           <div className=' text-center relative '>
               <img src={fileIlustration} alt='file ilustration' className=' w-full ' />
               <p className=' absolute left-24 font-bold text-lg text-gray-600 top-1/2'>Drag & Drop file here or click</p>
             </div>
                <input type='file' className=' absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer '  onChange={handleFileChange}  />
               
           </div>
          
           <div className='w-[500px] mt-4 '>
            <label htmlFor=' description' className='text-center text-xl font-bold text-gray-700 '>description</label>
            <textarea name='description' id='description' value={description} onChange={handleDescriptionChange} className='w-full outline-none h-20 border-2 border-gray-500 rounded-lg'></textarea>
           </div>
           <button className='py-3 mt-1 px-10 text-white text-center bg-teal-800 rounded-lg w-fit' type='submit'>Upload</button>

     </form>
    </div>
  )
}
