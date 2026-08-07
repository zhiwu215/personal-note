import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@renderer/components/ui/resizable'
import { WindowButtons } from './SharedComponents'

export default React.memo(() => {
  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel minSize="30%" defaultSize="35%">
          <div className="h-[40px] w-[100%] border-b-[.5px] border-b-stone-300 dark:border-b-stone-800 app-dragger flex justify-center"></div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="30%">
          <div className="h-[40px] px-2 w-[100%] border-b-[.5px] border-b-stone-300 dark:border-b-stone-800 app-dragger flex justify-end">
            {!window.navigator.userAgent.toLowerCase().includes('mac') && <WindowButtons />}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
})
