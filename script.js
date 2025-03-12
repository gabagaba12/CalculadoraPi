let piDigits = ""; 


fetch("pi_digits.txt")
    .then(response => response.text())
    .then(data => {
        piDigits = data.replace(/\s+/g, ""); 
        console.log("Dígitos de π  .");
    })
    .catch(error => console.error("Error :", error));


function buscarCumpleEnPi() {
    let dia = document.getElementById("dia").value.padStart(2, '0');
    let mes = document.getElementById("mes").value.padStart(2, '0');
    let anio = document.getElementById("anio").value.slice(-2); 
    let fechaStr = dia + mes + anio; 

    
    if (piDigits.length < 1000000) {
        document.getElementById("resultado").innerText = " Aguantame, ando pensando.";
        return;
    }

    
    let posicion = piDigits.indexOf(fechaStr);

    if (posicion !== -1) {
        document.getElementById("resultado").innerText = 
            ` Tu cumpleaños (${fechaStr}) aparece en π en la posición ${posicion + 1}.`;
    } else {
        document.getElementById("resultado").innerText = 
            ` Tu cumpleaños (${fechaStr}) no aparece en los primeros 1,000,000 dígitos de π.`;
    }
}


function calcularPi() {
    const piExacto = "3.14159265358979323846264338327950288419716939937510";
    
    let dia = document.getElementById("dia").value.padStart(2, '0');
    let mes = document.getElementById("mes").value.padStart(2, '0');
    let anio = document.getElementById("anio").value.padStart(4, '0');

    
    let fechaStr = dia + mes + anio;
    let decimales = fechaStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    if (decimales <= 0 || decimales > 50) {
        document.getElementById("resultado").innerText = "⚠️ Ingresa una fecha válida.";
        return;
    }

    
    let piConDecimales = piExacto.substring(0, decimales + 2); 

    document.getElementById("resultado").innerText = 
        `🔢 π con ${decimales} decimales:\n${piConDecimales}`;
}


function mostrarDatoPi() {
    const datosPi = [
        " π es un número irracional, lo que significa que nunca termina y nunca se repite.",
        " El 14 de marzo (3/14) se celebra el Día de π, ¡y también es el cumpleaños de Albert Einstein!",
        " La fracción 22/7 se usa como una aproximación de π, pero no es exacta.",
        " El récord mundial de memorización de π es de más de 70,000 dígitos, logrado por Rajveer Meena en 2015.",
        " Las computadoras han calculado π con más de 100 billones de dígitos.",
        " El símbolo π fue popularizado en 1706 por William Jones, pero se usó mucho más con Euler.",
        " π aparece en muchas fórmulas matemáticas y científicas, incluyendo la mecánica cuántica y la relatividad.",
        " π ha inspirado obras de arte y literatura, como la novela *Life of Pi*.",
        " π es crucial en la medición de círculos, esferas y ondas en la naturaleza.",
        " Si un círculo de pizza tiene un radio de 1, ¡su área es exactamente π!"
    ];

    let datoAleatorio = datosPi[Math.floor(Math.random() * datosPi.length)];
    document.getElementById("resultado").innerText = datoAleatorio;
}
