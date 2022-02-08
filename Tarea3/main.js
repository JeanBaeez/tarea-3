

let Estudiante = [];
function Estudiantes(nombre, matricula, n1, n2, n3, n4, promedio, eq) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
    this.promedio = promedio;
    this.eq = eq;
}
function clean() {
    document.getElementById("nombre").value = '';
    document.getElementById("matricula").value = '';
    document.getElementById("n1").value = '';
    document.getElementById("n2").value = '';
    document.getElementById("n3").value = '';
    document.getElementById("n4").value = '';
    document.getElementById("promedio").value = '';
    document.getElementById("eq").value = '';
}
function GuardarEstudiante() {

    Estudiante = JSON.parse(localStorage.getItem('estudiantes'));

    if (Estudiante.length == 0) {
        Estudiante = [];

        nombre = document.getElementById("nombre").value;
        matricula = document.getElementById("matricula").value;
        n1 = document.getElementById("n1").value;
        n2 = document.getElementById("n2").value;
        n3 = document.getElementById("n3").value;
        n4 = document.getElementById("n4").value;
        promedio = document.getElementById("promedio").value;
        eq = document.getElementById("eq").value;

        Estudiante = new Estudiantes(nombre, matricula, n1, n2, n3, n4, promedio, eq);
        localStorage.setItem('estudiantes', JSON.stringify(Estudiante));
        alert(`Estudiante ${nombre} guardado con exito`);

    } else {

        if (Estudiante != null) {
           
            nombre = document.getElementById("nombre").value;
            matricula = document.getElementById("matricula").value;
            n1 = document.getElementById("n1").value;
            n2 = document.getElementById("n2").value;
            n3 = document.getElementById("n3").value;
            n4 = document.getElementById("n4").value;
            promedio = document.getElementById("promedio").value;
            eq = document.getElementById("eq").value;
            Estudiante.push(new Estudiantes(nombre, matricula, n1, n2, n3, n4, promedio, eq));
            localStorage.setItem('estudiantes', JSON.stringify(Estudiante));
            alert(`Estudiante ${nombre} guardado con exito`);
        }
    }




    // Estudiante = JSON.parse(localStorage.getItem('estudiantes'));

    // if (Estudiante.length == 0) {

    //     Estudiante = new Estudiantes(nombre, matricula, n1, n2, n3, n4, promedio, eq);
    //     localStorage.setItem('estudiantes', JSON.stringify(Estudiante));
    // }
    // else {
    //     let Estudiante = [];
    //     Estudiante.push(new Estudiantes(nombre, matricula, n1, n2, n3, n4, promedio, eq));
    //     localStorage.setItem('estudiantes', JSON.stringify(Estudiante));
    //     alert(`Estudiante ${nombre} guardado con exito`);

    // }




}
function Calcular() {

    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let n4 = document.getElementById("n4").value;
    if(n1 == "" || n2 == "" || n3 == "" || n4 == ""){
        alert("Ingrese todos los datos");}
    let promedio = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4)) / 4;
    document.getElementById("promedio").value = promedio;
    if (promedio >= 95) {
        document.getElementById("eq").value = "A";
    } if (promedio >= 90 && promedio < 95) {
        document.getElementById("eq").value = "B";
    }

    if (promedio >= 80 && promedio < 89) {
        document.getElementById("eq").value = "C";
    }
    if (promedio >= 70 && promedio < 79) {
        document.getElementById("eq").value = "D";
    }
    if (promedio < 70) {
        document.getElementById("eq").value = "F NO ESTUDIES!!!";
    }

}

function IrTabla() {
    window.location.href = "./estudiantes.html";
}

function cargarDatos() {

    let datos = localStorage.getItem('estudiantes');
    if (datos != null) {
        Estudiante = JSON.parse(datos);
        CrearTabla();

    } else {
        alert("No hay datos");
        window.location.href = "./index.html";
    }



}
function IraGraficos() {
    window.location.href = "./graficos.html";
}

function CrearTabla() {
    let atras = document.createElement('button');
    atras.innerHTML = 'Atras';
    atras.setAttribute('onclick', 'IraInicio()');
    atras.setAttribute('class', 'btn blue-grey atras');
    document.body.appendChild(atras);

    let limpiarTodo = document.createElement('button');
    limpiarTodo.innerHTML = 'Limpiar LocalStorage';
    limpiarTodo.setAttribute('onclick', 'LimpiarLocalStorage()');
    limpiarTodo.setAttribute('class', 'btn blue-grey atras');
    document.body.appendChild(limpiarTodo);

    let graficos = document.createElement('button');
    graficos.innerHTML = 'Graficos';
    graficos.setAttribute('onclick', 'IraGraficos()');
    graficos.setAttribute('class', 'btn  blue-grey atras');
    document.body.appendChild(graficos);

    let header = document.createElement('header');
    header.setAttribute('class', 'container alineacion jumbotron');
    header.innerHTML = `<h1>Estudiantes</h1>`;
    document.body.appendChild(header);

    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");
    tabla.setAttribute("class", "table table-striped table-hover table-bordered container table-responsive tables");
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Nombre';
    th.setAttribute("class", "bg-dark text-white");
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.setAttribute("class", "bg-dark text-white");
    th.innerHTML = 'Matricula';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.setAttribute("class", "bg-dark text-white");
    th.innerHTML = 'Nota 1';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Nota 2';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Nota 3';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Nota 4';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Promedio';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Eq';
    tbody.appendChild(th);
    th = document.createElement("th");
    th.setAttribute("class", "bg-dark text-white");
    th.setAttribute("scope", "row");
    th.innerHTML = 'Acciones';
    tbody.appendChild(th);
    Estudiante = JSON.parse(localStorage.getItem('estudiantes'));
    for (let i = 0; i < Estudiante.length; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let td = document.createElement("td");
        td.setAttribute("class", "text-center");
        console.log(Estudiante[i].nombre);
        td.innerHTML = Estudiante[i].nombre;
        tr.appendChild(td);
        let td2 = document.createElement("td");
        td2.setAttribute("class", "text-center");
        td2.innerHTML = Estudiante[i].matricula;
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.setAttribute("class", "text-center");
        td3.innerHTML = Estudiante[i].n1;
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.setAttribute("class", "text-center");
        td4.innerHTML = Estudiante[i].n2;
        tr.appendChild(td4);
        let td5 = document.createElement("td");
        td5.setAttribute("class", "text-center");
        td5.innerHTML = Estudiante[i].n3;
        tr.appendChild(td5);
        let td6 = document.createElement("td");
        td6.setAttribute("class", "text-center");
        td6.innerHTML = Estudiante[i].n4;
        tr.appendChild(td6);
        let td7 = document.createElement("td");
        td7.setAttribute("class", "text-center");
        td7.innerHTML = Estudiante[i].promedio;
        tr.appendChild(td7);
        let td8 = document.createElement("td");
        td8.setAttribute("class", "text-center");
        td8.innerHTML = Estudiante[i].eq;
        tr.appendChild(td8);
        let td9 = document.createElement("td");
        td9.setAttribute("class", "text-center");
        td9.innerHTML = `<button class="btn-floating btn-large waves-effect waves-light red btn-elimininar" onclick="Eliminar(${i})"> <i class="material-icons bton-elimininar">delete</i>Eliminar</button>`;
        tr.appendChild(td9);


    }
    document.body.appendChild(tabla);


}
function Eliminar(i){
    Estudiante.splice(i,1);
    localStorage.setItem('estudiantes', JSON.stringify(Estudiante));
    location.reload();

}


function IraInicio() {
    history.back(); //Regresa a la pagina anterior
    //window.location.href = "./index.html";
}

function LimpiarLocalStorage() {
    localStorage.clear();
    alert("Se limpio el localStorage");
    window.location.reload();

}

function LoadChart() {
  

    Estudiante = JSON.parse(localStorage.getItem("estudiantes"));
    let ACount = Estudiante.filter((obj) => obj.eq === "A").length;
    let BCount = Estudiante.filter((obj) => obj.eq === "B").length;
    let CCount = Estudiante.filter((obj) => obj.eq === "C").length;
    let DCount = Estudiante.filter((obj) => obj.eq === "D").length;
    let FCount = Estudiante.filter((obj) => obj.eq === "F NO ESTUDIES!!!").length;
    let data =[ACount,BCount,CCount,DCount,FCount];
    console.log(ACount,BCount,CCount,DCount,FCount);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                label: 'Calificaciones por eq',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}


function createGrafico(){
    
    let atras = document.createElement('button');
    atras.innerHTML = 'Atras';
    atras.setAttribute('onclick', 'IraInicio()');
    atras.setAttribute('class', 'btn blue-grey atras');
    document.body.appendChild(atras);

    let limpiarTodo = document.createElement('button');
    limpiarTodo.innerHTML = 'Limpiar LocalStorage';
    limpiarTodo.setAttribute('onclick', 'LimpiarLocalStorage()');
    limpiarTodo.setAttribute('class', 'btn blue-grey atras');
    document.body.appendChild(limpiarTodo);

    let graficos = document.createElement('button');
    graficos.innerHTML = 'Graficos';
    graficos.setAttribute('onclick', 'IraGraficos()');
    graficos.setAttribute('class', 'btn  blue-grey atras');
    document.body.appendChild(graficos);

    let header = document.createElement('header');
    header.setAttribute('class', 'container alineacion jumbotron');
    header.innerHTML = `<h1>Calificacion por EQ</h1>`;
    document.body.appendChild(header);
    let chart = document.createElement("canvas");
    chart.setAttribute("id", "myChart");
    chart.setAttribute("width", "400");
    chart.setAttribute("height", "200");
    chart.setAttribute("style", "margin: 0 auto;");
    chart.setAttribute("class", "container");
    document.body.appendChild(chart);
    LoadChart();
}