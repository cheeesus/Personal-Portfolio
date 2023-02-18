import AboutSvg from '../assets/undraw_online_resume_re_ru7s.svg'
import AboutInfo from './AboutInfo'

function AboutUs() {
  return (
    <div className='about-us fade-in' id='about-us'>
        <div class="illustration">
            <img src={AboutSvg} alt=""/>
        </div>
        <AboutInfo />
    </div>
  )
}

export default AboutUs
