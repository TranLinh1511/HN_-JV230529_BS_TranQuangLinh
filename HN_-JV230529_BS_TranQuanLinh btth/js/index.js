let btnSave = document.querySelector('.btnSave');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let telInput = document.querySelector('#tel');
let countryInput = document.querySelector('#country');
let SearchInput = document.querySelector('.btn');
let sortInput = document.querySelector('.sort');

let students = [
    {
        id: crypto.randomUUID(),
        name: 'Rikei',
        email: 'rikei@gmail.com',
        tel: '083453874',
        country: 'Ha noi',
        sex: 'Nam',
    },
    {
        id: crypto.randomUUID(),
        name: 'Tran Linh',
        email: 'rikei@gmail.com',
        tel: '083453545',
        country: 'Ha noi',
        sex: 'Nam',
    },
    {
        id: crypto.randomUUID(),
        name: 'Thanh Huong',
        email: 'rikei@gmail.com',
        tel: '0833453453',
        country: 'Ha noi',
        sex: 'Nam',
    },
];
// showStudent
function showStudent() {
    let resultHtml = '';
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        resultHtml += `<tr>
            <td>${i + 1}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.tel}</td>
            <td>${student.country}</td>
            <td>${student.sex}</td>
            <td>
                <button type="button" data-id="${
                    student.id
                }" class='edit'>edit</button>
                <button type="button" data-id="${
                    student.id
                }" class='delete'>delete</button>
            </td>
        
        </tr>`;
    }
    document.querySelector('tbody').innerHTML = resultHtml;
}
showStudent();
// add and update
function handleAddStudent(event) {
    if (
        document.querySelector('#name').value &&
        document.querySelector('#country').value
    ) {
        let name = nameInput.value;
        let email = emailInput.value;
        let tel = telInput.value;
        let country = countryInput.value;
        let sex = document.querySelector('.gender:checked').value;
        if (event.target.classList.contains('update')) {
            let idUpdate = event.target.getAttribute('data-id');
            let indexUpdate;
            for (let i = 0; i < students.length; i++) {
                if (idUpdate === students[i].id) {
                    indexUpdate = i;
                }
            }
            students[indexUpdate].name = name;
            students[indexUpdate].email = email;
            students[indexUpdate].country = country;
            students[indexUpdate].tel = tel;
            students[indexUpdate].sex = sex;

            showStudent();
            //remove class
            // 7. reset button update to add
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#tel').value = '';
            document.querySelector('#country').value = '';

            btnSave.classList.remove('update');
            btnSave.removeAttribute('data-id');
            btnSave.innerText = 'Lưu Lại';

            return;
        }
        let objstudent = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            country: country,
            tel: tel,
            sex: sex,
        };
        students.push(objstudent);
        showStudent();
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#tel').value = '';
        document.querySelector('#country').value = '';
    } else {
        alert('Họ tên, quê quán không được để trống!!');
    }
}

// delete
function handleProcessStudent(event) {
    let clicked = event.target;
    if (clicked.classList.contains('delete')) {
        if (confirm('Ban chac chan muon xoa du lieu nay khong')) {
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#tel').value = '';
            document.querySelector('#country').value = '';
            btnSave.classList.remove('update');
            btnSave.removeAttribute('data-id');
            btnSave.innerText = 'Lưu Lại';
            let idDelete = clicked.getAttribute('data-id');
            let indexDelete;
            for (let i = 0; i < students.length; i++) {
                if (idDelete === students[i]) {
                    indexDelete = i;
                }
            }
            students.splice(indexDelete, 1);
        }
        showStudent();
    } else if (clicked.classList.contains('edit')) {
        let idUpdate = clicked.getAttribute('data-id');
        let indexUpdate;
        for (let i = 0; i < students.length; i++) {
            if (idUpdate === students[i].id) {
                indexUpdate = i;
            }
        }
        nameInput.value = students[indexUpdate].name;
        emailInput.value = students[indexUpdate].email;
        telInput.value = students[indexUpdate].tel;
        countryInput.value = students[indexUpdate].country;
        // document.querySelector(
        //     `input[value=${students[indexUpdate].sex}]`
        // ).checked = true;
        btnSave.classList.add('update');
        btnSave.setAttribute('data-id', idUpdate);
        btnSave.innerText = 'Update';
    }
}
// search
function handleSearchStudent() {
    let valueSearch = document.querySelector('.btn-input').value.toLowerCase();

    let studentFilter = students.filter(function (studentItem) {
        return studentItem.name.toLowerCase().includes(valueSearch);
    });
    let resultHtml = '';
    for (let i = 0; i < studentFilter.length; i++) {
        let student = studentFilter[i];
        resultHtml = resultHtml += `<tr>
        <td>${i + 1}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.tel}</td>
        <td>${student.country}</td>
        <td>${student.sex}</td>
        <td>
            <button type="button" data-id="${
                student.id
            }" class='edit'>edit</button>
            <button type="button" data-id="${
                student.id
            }" class='delete'>delete</button>
        </td>
    
    </tr>`;
    }
    document.querySelector('tbody').innerHTML = resultHtml;
}
// sort
function handleSortStudent() {
    students.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    showStudent();
}
// Event
btnSave.addEventListener('click', handleAddStudent);
btnSave.addEventListener('click', handleAddStudent);
document.querySelector('body').addEventListener('click', handleProcessStudent);
SearchInput.addEventListener('click', handleSearchStudent);
sortInput.addEventListener('click', handleSortStudent);
document
    .querySelector('.btn-input')
    .addEventListener('keyup', handleSearchStudent);
