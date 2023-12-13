import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { clsx } from 'clsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='h-screen bg-stone-800 p-4'>
      <h1
        className={clsx(
          'bg-orange-700',
          true && 'm-5 flex bg-slate-800 p-8 text-zinc-200',
          true && 'bg-red-600 p-9'
        )}
      >
        HOLA!
      </h1>
    </div>
  </React.StrictMode>
)
