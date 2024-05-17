import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arrow from './assets/right-arrow.png'
import appStyle from './App.module.css'
import Text from './Text'

function App() {

  const [slide, setSlide] = useState(1)
  const [translate, setTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)

  let onSlideChangedRight = () => {
    setSlide(slide + 1)
    setTranslate(translate + 320)
    console.log(translate)
    setPrevTranslate(translate)
    console.log(prevTranslate)
  }

  let onSlideChangedLeft = () => {
    setSlide(slide - 1)
    console.log(slide)
    setTranslate(translate - 320)
    console.log(translate)
    setPrevTranslate(translate)
    console.log(prevTranslate)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      { slide !== 1 &&
        <div onClick={() => onSlideChangedLeft()}><img src={arrow} className='w-7 m-2 rotate-180 opacity-50' /></div>
      }
      <div className={appStyle.parent}>
        <Text text='Я давно хотел сделать что то подобное хпхпхпх' translate={translate} prevTranslate={prevTranslate} />
        <Text text='И вот сейчас у меня появилась очень хорошая возможность)' translate={translate} prevTranslate={prevTranslate}/>
        <Text text='Вообще я знаешь, что я хочу тебе сказать. Я хоетл начать зарабатывать летом, нооооо...' translate={translate} prevTranslate={prevTranslate}/>
        <Text text='все мои планы поменялись всвязи с тобой пхпхпххп И мне даже знаю конкретно из-за чего они посенялись. Ты прсто очень хороший человек ' translate={translate} prevTranslate={prevTranslate}/>
        <Text text='Ради тебя мне хочется меняться и становиться лучше, мне хочется чтобы ты радовалась улыбалась намного чаще. Можно сказать, что ты делаешь со мной невозможное, птому что я такой ленивый.. ' translate={translate} prevTranslate={prevTranslate}/>
        <Text text='И знаешь что) Я люблю тебя, наверное даже слишком сильно, хотя нее.. это врядли, с каждым днем я люблю тебя всё сильнее, так что сейчас это далеко не максимум)' translate={translate} prevTranslate={prevTranslate}/>
      </div>
      {slide !== 6 &&
        <div onClick={ () => onSlideChangedRight()}><img src={arrow} className='w-7 m-2 opacity-50' /></div>
      }
    </div>
  )
}

export default App
