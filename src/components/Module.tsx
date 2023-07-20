import * as Collapsed from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';


interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
  return (
    <Collapsed.Root className='group' open={moduleIndex === 0}>
      <Collapsed.Trigger className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
        <div className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>
          {moduleIndex + 1}
        </div>

        <div className='flex flex-col gap-1 text-left'>
          <strong className='text-sm'>{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className='w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition' />
      </Collapsed.Trigger>
      <Collapsed.Content>
        <nav className='relative flex flex-col gap-4 p-6'>
          <Lesson title='Fundamentos do Redux' duration='16:33' />
          <Lesson title='Criando store do Redux' duration='12:17' />
          <Lesson title='Disparando actions no Redux' duration='09:24' />
        </nav>
      </Collapsed.Content>
    </Collapsed.Root>
  )
}