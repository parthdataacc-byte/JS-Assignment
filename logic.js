console.log("JS is connected");

let users = [];
let userIdCounter = 1;

function createUser()
{
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const role = document.querySelector("#role").value;

    if(!name || !email)
    {
        alert("Name and Email are required!");
        return;
    }

    const newUser =  {
        id: userIdCounter++,
        name: name,
        email: email,
        role: role,
        isActive: true
    };

    // users = [...users, newUser];
    // displayUsers();

    //now using fake api call
    new Promise((res, rej) =>{
        setTimeout(() => {
            const success = !users.find(user => user.email === newUser.email);

            if(success)
            {
                res(newUser);
            }
            else{
                rej("User with this email already exists!");
            }
        }, 1000);
    })
    .then((data) =>{
        users = [...users, data];
        displayUsers();
    })
    .catch((err) =>{
        alert(err);
    })
    .finally(() =>{
        console.log("API call completed.");
    });
}
function displayUsers(userArray = users)
{
        const container = document.querySelector("#userList");
        container.innerHTML = "";
        userArray.map(user => {
            const div = document.createElement("div");

        div.innerHTML = `
            <p>
                ${user.name} | ${user.email} | ${user.role} | ${user.isActive ? "Active" : "Inactive"}
                <button onclick="toggleUser(${user.id})">Toggle</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </p>
        `;
        container.appendChild(div);
    });
}

const toggleUser = (id) =>{
    users = users.map(user =>{
        if(user.id === id) 
        {
            return {...user, isActive: !user.isActive};
        }
        return user;
    });
    displayUsers();
}

function deleteUser(id)
{
    users = users.filter(user => user.id !== id);
    displayUsers();
}

function filterUsers(role)
{
    const filtered = users.filter(user => user.role === role);
    displayUsers(filtered);
}


function showActiveUsers()
{
    const activeUsers = users.filter(user => user.isActive === true);
    displayUsers(activeUsers);
}

console.log("Synchronous code");

setTimeout (() => {
    console.log("Asynchronous code");
}, 1000);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End of script");