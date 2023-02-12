const btnFeatures = document.querySelector('.nav-features a');
const btnCompany = document.querySelector('.nav-company a');

btnFeatures.addEventListener('click', (event) =>{
  toggleDropdown(btnFeatures)
})

btnCompany.addEventListener('click', (event) =>{
  toggleDropdown(btnCompany)
})

function toggleDropdown(btn){
  const dropDown = btn.nextElementSibling;
  btn.querySelectorAll('img').forEach((img) =>{
    img.classList.toggle('active')
  })
  dropDown.classList.toggle('active')
}
