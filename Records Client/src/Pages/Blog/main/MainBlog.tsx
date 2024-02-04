import PollingView from './PollnQ/PollingView'
import { useAppSelector } from '@/app/ReduxHooks'
import QuestionView from './PollnQ/QuestionView'
const MainBlog = () => {
  let {data} = useAppSelector(state=>state.Blog)
  return (
    <main className="flex flex-col w-full">
      <header className="w-full flex items-center rounded-lg justify-center p-2 mb-4 ">
      {["mp3", "mp4"].includes((data?.banner||"")?.split(".")[3]) ? (
              <video src={data?.banner} className='rounded'  loop autoPlay controls ></video>
            ) : (
              <img
                src={data?.banner || "/images/Records.png"}
                alt=""
                className=" object-contain "
              />
            )}
     
      </header>
      <div className="text-xl">
<p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html:data?.content||""}}>
</p>

      </div>
      {
        data?.AdditonalAssetsType=="Poll"?
<PollingView />:
<QuestionView/>
      }
    </main>
  )
}




export default MainBlog
