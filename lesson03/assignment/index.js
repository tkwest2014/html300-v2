document. addEventListener("DOMContentLoaded", function(){
  const empJSON = '[{"name":"Paolo Maldini", "jobTitle":"Front End Developer", "company":"Web Weavers", "experience":"3 Years", "school":"University of Washington", "major":"Marketing", "email":"paolo@example.com", "linkedInUrl":"paolo@linkedinprofile.com"}, {"name": "Barbara Bonansea", "jobTitle": "Software Engineer", "company":"Excellence in the Cloud", "experience":"12 years", "school":"University of Southern California", "major":"Computer Science", "email":"barbara@example.com", "linkedInUrl":"barbara.linkedinprofile.com"}]'
  const emp = JSON.parse(empJSON)

  const container = document.querySelector('#main')

  emp.forEach(function(el){

    let name = document.createElement('div')
    name.innerHTML = `
    <img src="img/headshot.jpg" class="info_headshot" alt="headshot">
    <h1 class="info_name">${el.name}</h1>
    <h2 class="info_title">${el.jobTitle}</h2>`

    name.classList.add('card_profile')

    let list = document.createElement('p')
    list.innerHTML = `
    <p class="card_company"><b><span style="font-size:1.5rem">Company: </span></b>${el.company}</p>
    <p class="card_experience"><b><span style="font-size:1.5rem">Experience: </span></b>${el.experience}</p>
    <p class="card_school"><b><span style="font-size:1.5rem">School: </span></b>${el.school}</p>`

    list.classList.add('card_info')

    let main = document.createElement('section')
    main.append(name, list)
    main.classList.add('main')

    container.append(main)

  })

})
