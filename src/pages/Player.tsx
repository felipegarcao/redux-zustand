import { MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="w-[1100px] flex flex-col gap-6">
        <div className="flex items-center justify-between">

          <Header />

          <button className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600'>
            <MessageCircle className='w-4 h-4' />
            Deixar feedback
          </button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex-1'>
            <Video />
          </div>


          <aside className='w-80 border-l divide-y-2 divide-zinc-900 absolute top-0 bottom-0 right-0 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
           <Module title='a base do Redux' amountOfLessons={4} moduleIndex={0} />
           <Module title='Interface da aplicação' amountOfLessons={5} moduleIndex={1} />
           <Module title='Aplicação com Redux' amountOfLessons={6} moduleIndex={2} />
          </aside>
        </main>
      </div>
    </div>
  )
}