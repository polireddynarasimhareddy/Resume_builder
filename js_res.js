var expercienceCount = 0;
var educationCount = 0;
const skillSet = new Set();//js js js 
var fileName = "";



function previewImage(event) {
    console.log("previewImage(event) <<");
    console.log(typeof event);

    var imagepreview = document.getElementById('image-preview');

    if (event.target.files[0]) {
        imagepreview.src = URL.createObjectURL(event.target.files[0]);
        imagepreview.style.display = 'block';
        imagepreview.onload = function () {
            URL.revokeObjectURL(imagepreview.src);//free memory
        }

    }
    console.log("previewImage(event) >>");
}

function addSkills() {
   // console.log("addSkills() <<");
    if (document.querySelector("#skills-input").value.length == 0) {
        alert("Please Enter the skills");
    }
    else {
        var skillsValue = document.querySelector("#skills-input").value;
        if (skillSet.has(skillsValue)) {
            alert("skill already exits")
            retrun;
        }
        skillSet.add(skillsValue);
        document.querySelector("#skills").innerHTML += `
            <div class="skills mt-1">
            <span class=""skils-name">${skillsValue} </span>
            <button class="btn btn-outline-danger delete"> 
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>`;

        document.querySelector("#skills-input").value = "";
        var current_tasks = document.querySelectorAll(".delete")
        console.log(typeof current_tasks);
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            };
        }
    }
   // console.log("addSkills() >>");
}

//work Experience

function addWorkExperience(){
    console.log('addWorkExperience() <<');

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control","we-field","mt-1");
    newNode.setAttribute("rows",'3');
    newNode.setAttribute("id","experience-"+ ++expercienceCount);
    newNode.setAttribute("placeholder","Enter work/Project experience - "+ expercienceCount);
    

    let experienceDiv = document.getElementById("experience-div");
    let experienceAddButtonDiv = document.getElementById("we-btns-div");
    let we_del_btn = document.getElementById("we-del-btn");
    // experienceDiv.appendChild(experienceAddButtonDiv)
    // experienceDiv.appendChild(newNode);
    

    experienceDiv.insertBefore(newNode,experienceAddButtonDiv);

    console.log('addWorkExperience() >>');
}

function removeWorkExperience(){
    console.log("removeWorkExperience() <<" +expercienceCount);
    let latestExpercience = document.getElementById("experience-"+expercienceCount)
    latestExpercience.remove();

    --expercienceCount;

    console.log("removeWorkExperience() >>");
}


// education


function addEducation(){
    console.log('addEducation() <<');

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control","ed-field","mt-1");
    newNode.setAttribute("rows",'3');
    newNode.setAttribute("id","education-"+ ++educationCount);
    newNode.setAttribute("placeholder","Enter your academic qualification - "+ educationCount);
    

    let educationDiv = document.getElementById("education-div");
    let educationAddButtonDiv = document.getElementById("ed-btns-div");
    let ed_del_btn = document.getElementById("ed-del-btn");
    // experienceDiv.appendChild(experienceAddButtonDiv)
    // experienceDiv.appendChild(newNode);
    

    educationDiv.insertBefore(newNode,educationAddButtonDiv);

    console.log('addEducation() >>');
}

function removeEducation(){
    console.log("removeEducation() <<" +educationCount);
    let latestEducation = document.getElementById("education-"+educationCount)
    latestEducation.remove();

    --educationCount;

    console.log("removeEducation() >>");
}

function startOver(){
    console.log("startOver() <<");
    window.location.reload();
    console.log("startOver() <<");
}

function GenerateResume(){
    console.log('GenerateResume() <<');
    let fullName = document.getElementById("full-name").value;
    let fullNameTemplate = document.getElementById("full-name-template");
    fullNameTemplate.innerHTML = fullName;

    let emailName = document.getElementById("email").value;
    let emailNameTemplate = document.getElementById("email-template");
    emailNameTemplate.innerHTML = emailName;

    let phone = document.getElementById("phone").value;
    let phoneTemplate = document.getElementById("phone-template");
    phoneTemplate.innerHTML = phone;

    let DOB = document.getElementById("DOB").value;
    let DOBTemplate = document.getElementById("dob-template");
    DOBTemplate.innerHTML = DOB;

    let address = document.getElementById("address").value;
    let addressTemplate = document.getElementById("address-template");
    addressTemplate.innerHTML = address;

    let linkedIn = document.getElementById("linkedIn").value;
    let linkedInTemplate = document.getElementById("linkedin-template");
    linkedInTemplate.innerHTML = linkedIn;

    let github = document.getElementById("github").value;
    let githubTemplate = document.getElementById("github-template");
    githubTemplate.innerHTML = github;

    let Objective = document.getElementById("Objective").value;
    let ObjectiveTemplate = document.getElementById("objective-template");
    ObjectiveTemplate.innerHTML = Objective;


    //skills-template
let skillSetString= "";
for(let skill of skillSet){
    skillSetString += `<span class="badge rounded-pill bg-secondary skill-pill">${skill}</span>`;
}
let skillTemplate = document.getElementById("skills-template");
skillTemplate.innerHTML = skillSetString;

//work experience
let experiences = document.getElementsByClassName("we-field");
let experiencesListString = "";

for(let experience of experiences){
    experiencesListString += `<li>${experience.value}</li>`;
}

let experiencesTemplate = document.getElementById("we-template");
experiencesTemplate.innerHTML = experiencesListString;

//education 
let academicQualifications = document.getElementsByClassName("ed-field");
let academicQualificationString= "";

for(let qualifications of academicQualifications){
    academicQualificationString += `<li>${qualifications.value}</li>`;
}

let edTemplate = document.getElementById("ed-template");
edTemplate.innerHTML = academicQualificationString;

//Profile Pictures
let files = document.getElementById("Profile-img").files[0];
if(files === undefined){
    console.log("filenot selected");
}
else{
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = function(){
        document.getElementById("profile-img-template").src = reader.result;
    }
}
    //unhiding the resume template
    document.getElementById("resume-template").style.display = "block";
    document.getElementById("save-btn").style.display = "block";
    //hiding the resume form
    document.getElementById("resume-bulider").style.display = "none";
    console.log('GenerateResume() <<');

}

function printResume(templateId){
    console.log("printResume() <<");
    var printContent =document.getElementById(templateId).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    console.log("printResume() >>"); 
}
