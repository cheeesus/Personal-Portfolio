let aboutButton = document.getElementById('about-button');
let portfolioButton = document.getElementById('portfolio-button');
let contactButton = document.getElementById('contact-button');
let contentContainer = document.getElementById('content-container');
const about = `<div class="about-us" id="about-us">
<div class="illustration">
    <img src="undraw_online_resume_re_ru7s.svg" alt="">
</div>
<div class="about-info">
    <h2><b>Why Choose us?</b></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fugit illum porro quo eaque natus suscipit inventore exercitationem facilis consequuntur maiores ipsa nihil, nesciunt aut.</p>
    <div class="skills">
        <h3 for="">Apps development:</h3>
        <div class="progress">
            <div class="progress-value app"></div>
        </div>
        <h3 for="">Web development:</h3>
        <div class="progress">
            <div class="progress-value web"></div>
        </div>
        <h3 for="">UI / UX Design:</h3>
        <div class="progress">
            <div class="progress-value design"></div>
        </div>
    </div>
</div>
</div>`
const portfolio = `<div class="portfolio" id="portfolio">
<h2>Latest Projects</h2>
<div class="work-showcase">
    <div class="card">
        <figure>
            <img src="eternity.png" alt="">
        </figure>
        <div class="card-title">
            <div class="title"><a href="https://etternity.netlify.app/"> Eternity </a></div>
            <button><a href="https://etternity.netlify.app/"><i class='bx bx-link'></i></a></button>
        </div>
    </div>
    <div class="card">
        <figure>
            <img src="calin.png" alt="">
        </figure>
        <div class="card-title">
            <div class="title"><a href="https://calinpractice.netlify.app/"> Calin </a></div>
            <button><a href="https://calinpractice.netlify.app/"><i class='bx bx-show'></i></a></button>
        </div>
    </div>
    <div class="card">
        <figure>
            <img src="wameedh.png" alt="">
        </figure>
        <div class="card-title">
            <div class="title"><a href="https://wameedhsc.netlify.app/"> Wameedh sc Club </a></div>
            <button><a href="https://wameedhsc.netlify.app/"><i class='bx bx-link'></i></a></button>
        </div>
    </div>
    <div class="card">
        <figure>
            <img src="bloggie.png" alt="">
        </figure>
        <div class="card-title">
            <div class="title"><a href="https://bloggiie.netlify.app/"> Bloggie </a></div>
            <button><a href="https://bloggiie.netlify.app/"><i class='bx bx-link'></i></a></button>
        </div>
    </div>
</div>
</div>`
portfolioButton.addEventListener('click', ()=> {
    
    contentContainer.innerHTML = portfolio;
    contentContainer.classList.add = 'fade-in'
})
aboutButton.addEventListener('click', ()=> {
    
    contentContainer.innerHTML = about;
    contentContainer.classList.add = 'fade-in'
})