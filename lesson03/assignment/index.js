document. addEventListener("DOMContentLoaded", function(){

  //Creates variable using data from data.json
  const empJSON = '[{"name":"Paolo Maldini", "jobTitle":"Front End Developer", "company":"Web Weavers", "experience":"3 Years", "school":"University of Washington", "major":"Marketing", "email":"paolo@example.com", "linkedInUrl":"paolo@linkedinprofile.com", "codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]}, {"name": "Barbara Bonansea", "jobTitle": "Software Engineer", "company":"Excellence in the Cloud", "experience":"12 years", "school":"University of Southern California", "major":"Computer Science", "email":"barbara@example.com", "linkedInUrl":"barbara.linkedinprofile.com", "codeLanguages": ["HTML", "JavaScript", "CSS", "Go"]}, {"name": "Javier Hernandez", "jobTitle": "User Experience Engineer", "company": "Web Sites and More", "experience": "5 years", "school": "Seattle University", "major": "Performing Arts", "email": "javier@example.com", "linkedInUrl": "javier.linkedinprofile.com", "codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]}, {"name": "Maribel Dominguez", "jobTitle": "Front End Engineer", "company": "Bits and Bytes", "experience": "6 years", "school": "University of Washington", "major": "Mechanical Engineering", "email": "maribel@example.com", "linkedInUrl": "maribel.linkedinprofile.com", "codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]}]'
  const emp = JSON.parse(empJSON)

  //Outputs data to ID template-hook in html file
  const container = document.querySelector('#template-hook')

  //Does a For Each on each object in the variable to create the cards
  emp.forEach(function(el){

    //Formats the image, title and name
    let name = document.createElement('div')
    name.innerHTML = `
    <img src="img/headshot.jpg" class="info_headshot" alt="headshot">
    <h1 class="info_name">${el.name}</h1>
    <h2 class="info_title">${el.jobTitle}</h2>`

    //Adds class to the image, title and name
    name.classList.add('card_profile')

    //Formats the Employee Info
    let list = document.createElement('p')
    list.innerHTML = `
    <p class="card_company"><b><span style="font-size:1.5rem">Company: </span></b>${el.company}</p>
    <p class="card_experience"><b><span style="font-size:1.5rem">Experience: </span></b>${el.experience}</p>
    <p class="card_school"><b><span style="font-size:1.5rem">School: </span></b>${el.school}</p>
    <p class="card_major"><b><span style="font-size:1.5rem">Major: </span></b>${el.major}</p>
    <p class="card_major"><b><span style="font-size:1.5rem">Code Langauges: </span></b>${el.codeLanguages}</p>
    <p class="card_email"><b><span style="font-size:1.5rem">Email: </span></b>${el.email}</p>
    <img src="img/linkedin.svg" class="linkedin" alt="linkedin">
    <p class="card_linkedin">${el.linkedInUrl}</p>`

    //Adds class to the employee info
    list.classList.add('card_info')

    //Adds class to the card as a whole and appends it all together to display on the page
    let main = document.createElement('section')
    main.append(name, list)
    main.classList.add('main')

    container.append(main)

  })

})
