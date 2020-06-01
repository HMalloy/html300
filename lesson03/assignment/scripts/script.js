// jQuery Doc Ready

$(function () {
  const cards = [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    },
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
    },
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "company": "Chicago Cubs",
      "experience": "12 years",
      "school": "USC",
      "major": "Pitching",
      "email": "kyleH@cubs.com",
      "linkedInUrl": "kyle.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Buls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
  ];
  // array.append(`# ${key} `);
  // array.append(`the value is ${value}<br>`);
  const cardHTML = cards.forEach(function(el) {
    let card = (`<div class="card">
      <!-- card body -->
      <div class="card-body">
        <!-- card copy 1 -->
        <div class="card-copy">
          <!-- card image -->
          <div class="card-img">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79" alt="Smartly dress man smiling enthusiastically straight ahead.">
          </div>
          <!-- card title -->
          <div class="card-title">
            <h3 class="name">${el.name}</h3>
            <p class="job">${el.jobTitle}</p>
          </div>
        </div>
        <!-- card copy 2 -->
        <div class="card-copy">
          <!-- card about list -->
          <ul class="about">
            <li class="item"><strong>Company:</strong> ${el.company}</li>
            <li class="item"><strong>Experience:</strong> ${el.experience}</li>
            <li class="item"><strong>School:</strong> ${el.school}</li>
            <li class="item"><strong>Major:</strong> ${el.major}</li>
            <li class="item"><strong>Email:</strong> ${el.email}</li>
            <li class="item linkedin"><img src="img/linkedin.svg" alt="linkedin logo"> ${el.linkedInUrl}</li>
            <li class="item"><strong>Coding Languages:</strong> ${el.codeLanguages.join(', ')}</li>
          </ul>
        </div>
      </div>
    </div>`);
    $(".people").append(card);
  });
});
