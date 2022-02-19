class Student {
    constructor(name, email, website, image, gender, skills) {
        this.name = name;
        this.email = email;
        this.website = website;
        this.image = image;
        this.gender = gender;
        this.skills = skills;
    }
}
class Display{
    add(data){
        let s=document.getElementById('tableBody')
        let lastchild=s.lastElementChild;
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        data.gender = data.gender.charAt(0).toUpperCase() + data.gender.slice(1);

        if(lastchild!=null){
            lastchild.classList.remove('fadeopt')
        }
        let current = `
        <tr class="fadeopt">
            <td>
                <ul>
                    <li> ${data.name}</li>
                    <li> ${data.gender}</li>
                    <li> ${data.email}</li>
                    <li><a href=${data.website} target="_blank">${data.website}</a></li>
                    <li> ${data.skills}</li>
                </ul>
            </td>
            <td>
                <img src=${data.image} class="img-fluid rounded-start" alt="Image URL Is Wrong">
            </td>
        </tr>    
        `;
        s.innerHTML+=current;
    }
    clear() {
        let StudentForm = document.getElementById('studentform');
        console.log(StudentForm);
        StudentForm.reset();
    }
}
function clearall(){
    let StudentForm = document.getElementById('tableBody');
    StudentForm.innerHTML='';
}
let StudentForm = document.getElementById('studentform');
StudentForm.addEventListener('submit', enroll);
function enroll(e){
    names=document.getElementById("name").value;
    email=document.getElementById("email").value;
    website=document.getElementById("website").value;
    image=document.getElementById("imglink").value;
    let gender
    male=document.getElementById("male");
    female=document.getElementById("female");
    let skills=[]
    java=document.getElementById("inlineCheckbox1");
    html=document.getElementById("inlineCheckbox2");
    css=document.getElementById("inlineCheckbox3");
    if (male.checked) {
        gender = male.value;
    }
    else if (female.checked) {
        gender = female.value;
    } 
    if(java.checked)skills.push('JAVA')
    if(html.checked)skills.push('HTML')
    if(css.checked)skills.push('CSS')
    let student = new Student(names, email, website, image, gender, skills);
    let display = new Display();
    display.add(student);
    display.clear();
    // e.preventDefault();
}
