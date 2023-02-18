import React from 'react'

function AboutInfo() {
  return (
    <div className='about-info'>
        <h2><b>Why Choose us?</b></h2>
        <p>We can make your websites as per your desire. We offer unlimited revisions till the satisfaction of our clients. Our biggest strengths are the ability to think out of the box, strong work ethic, and working well under pressure.</p>
        <p>Hire us and we will make sure your request is fulfilled!</p>
        <div class="skills">
            <h3>Web development:</h3>
            <div class="progress">
                <div class="progress-value web"></div>
            </div>
            <h3>UI / UX Design:</h3>
            <div class="progress">
                <div class="progress-value design"></div>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo
