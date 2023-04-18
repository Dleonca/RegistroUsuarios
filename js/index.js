let tableUsers=[
    {idU:'12345678',names:'hashi',lastNames:'rua solser',gender:'M',birthdate:'01/12/1999',email:'Hrs@asmr.com',cellphone:'3203204234',dir:'cl 3 n2-3',pass:'dgrtrrt44rf',cpass:'dgrtrrt44rf'},
    {idU:'13456789',names:'Densji',lastNames:'hatake os',gender:'M',birthdate:'12/12/2000',email:'dho@asmr.com',cellphone:'6234567891',dir:'cr 12 n23-43',pass:'dgrtrrt44rf',cpass:'dgrtrrt44rf'},
    {idU:'888345678',names:'mia anne',lastNames:'dua silky',gender:'F',birthdate:'30/06/1997',email:'mads@asmr.com',cellphone:'3002223456',dir:'cl 63 n62-13',pass:'dgrtrrt44rf',cpass:'dgrtrrt44rf'}
]
let bodytable = document.getElementById('tbody');

const listar=()=>{
    let usuarios = "";
    for (let i = 0; i < tableUsers.length; i++) {
        usuarios +=`<tr>
        <th scope="row">${i+1}</th>
        <td>${tableUsers[i].idU}</td>
        <td>${tableUsers[i].names}</td>
        <td>${tableUsers[i].lastNames}</td>
        <td>${tableUsers[i].gender}</td>
        <td>${tableUsers[i].birthdate}</td>
        <td>${tableUsers[i].email}</td>
        <td>${tableUsers[i].cellphone}</td>
        <td>${tableUsers[i].dir}</td>
        <td>${tableUsers[i].pass}</td>
        <td>${tableUsers[i].cpass}</td>
      </tr>`;
        
    }
    bodytable.innerHTML = usuarios;
}
let a = 3;
const registrar=()=>{
    const idU = document.getElementById('idU').value ;
    const names = document.getElementById('names').value ;
    const lastNames = document.getElementById('lastNames').value ;
    const gender = document.getElementById('gender').value ;
    const birthdate = document.getElementById('birthdate').value ;
    const email = document.getElementById('email').value ;
    const cellphone = document.getElementById('cellphone').value ;
    const dir = document.getElementById('dir').value ;
    const pass = document.getElementById('pass').value ;
    const cpass = document.getElementById('cpass').value ;

    bodytable.innerHTML +=`<tr>
    <th scope="row">${a+1}</th>
    <td>${idU}</td>
    <td>${names}</td>
    <td>${lastNames}</td>
    <td>${gender}</td>
    <td>${birthdate}</td>
    <td>${email}</td>
    <td>${cellphone}</td>
    <td>${dir}</td>
    <td>${pass}</td>
    <td>${cpass}</td>
  </tr>`;

  const nuevo = {idU, names, lastNames, gender, birthdate, email, cellphone, dir, pass, cpass};
  tableUsers.push(nuevo);
}