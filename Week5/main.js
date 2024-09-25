let months = ["Jan","Mar","April"];
months.splice(1,0,"Feb")
console.log(months);
months.push("apple");
console.log(months);
months.splice(4,1,"May","June");
console.log(months);
let Numbers = [12,35,4,22,10,47];
console.log(Numbers.slice(2,4));
console.log(Numbers);
months.push("Jan");
console.log(Numbers.sort());
console.log(months.join(" - "));
let cloned = [...months];
console.log(cloned);
let merge = [...months,...Numbers];
console.log(merge);
for(i = 0; i<months.length;i++){
    console.log(months[i]);
}
months.forEach((value,index) => {
    console.log(`Index of ${value} is ${index}`);
});
let b = Numbers.map((item) => item * 3);
console.log(b);

let contacts = [];
function addContact(){
    const nameInput = document.getElementById("name").ariaValueMax.trim();
    if (nameInput !== ""){
        contacts.push(nameInput);
        document.getElementById("name").value = "";
    }else{
        alert("Please fill the name and phone number");
    }
}

function removeContact(index){
    contacts.splice(index,1);
    renderContacts();
}

function renderContacts(){
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
    contactList.forEach((contact,index) => {
        const li = document.createElement("li");
        li.innerHTML = `${contact} <button onclick=removeContact(${index})>Remove</button>`;
        contactList.appendChild(li);
    });
}

function sortContact(){
    contacts.sort((a,b) => a.name.localeCompare(b.name));
    renderContacts();
}
