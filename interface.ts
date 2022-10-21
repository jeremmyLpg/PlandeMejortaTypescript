enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

const medico = {
    name: "martin",
    email: "martin@gmail.com",
    role: Role.Doctor
};


const  printStaff = (staff:Staff) =>
{
    console.log(staff)
}
printStaff(medico);