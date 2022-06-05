document.querySelector('#all-classes-btn').addEventListener('click', makeReq);
document.querySelector('#class-search-btn').addEventListener('click', makeReq);
let classesDiv = document.querySelector('#classes');

async function makeReq(e) {
    const classSearchValue = document.querySelector('input').value;
    
    const buttonClick = e.target.id;
    if (buttonClick === 'class-search-btn') {
        const res = await fetch(`/api/classes/${classSearchValue}`);
        const data = await res.json();

        console.log(data)

        const div = document.createElement('div');
        div.classList.add("class-card");
    
        div.innerHTML += `
            <h2>${data.class}</h2>
            <p>${data.message}</p>
            <p><a href="${data.checkin}">Twitter Check-In</a></p>
            <p><a href="${data.slides}">Slides</a></p>
            <p><a href="${data.youtube}">YouTube</a></p>`
                            
        // add div to html
        classesDiv.appendChild(div);
    } else {
        const res = await fetch(`/api`);
        const data = await res.json();

        console.log(data)

        data.forEach(element => {
            const div = document.createElement('div');
            div.classList.add("class-card");
    
            div.innerHTML += `
                <h2>${element.class}</h2>
                <p>${element.message}</p>
                <p><a href="${element.checkin}">Twitter Check-In</a></p>
                <p><a href="${element.slides}">Slides</a></p>
                <p><a href="${element.youtube}">YouTube</a></p>`
                            
            // add div to html
            classesDiv.appendChild(div);
        });
    }
    
    // const res = await fetch(`/api`);
    // const data = await res.json();
}