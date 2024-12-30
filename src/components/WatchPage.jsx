import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Head from './Head';
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';

const WatchPage = () => {
  const [video,setvideo]=useSearchParams();
  return (<>
    <Head/>
    <div className='bg-slate-100 flex p-5' >

    <div className='videoandcomments w-3/4'>

    <div className='pb-14 px-12  '>
    <iframe className='rounded-lg' width="1200" height="700" src={`https://www.youtube.com/embed/${video.get("v")}?si=5ksYDOkpuuZtoQHa`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>

    <CommentContainer/>
    </div>
    <div className='livechat w-full h-[75vh]  ' >
       <Livechat/>
    </div>
    </div>
    </>
  )
}

export default WatchPage
