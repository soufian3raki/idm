// Esta función genera una clave de serie.
function generateSerial() {
    // Define un conjunto de caracteres hexadecimales.
    //! El código esta aquí: https://forum.thiweb.com/viewtopic.php?t=12882&start=28 
    const caracteresHex = "32594f5042334151435655584d4e52533937574530495a44344b4c4647484a3831363554";

    // Convierte los caracteres hexadecimales en una cadena de caracteres.
    const caracteres = Array.from(Array(caracteresHex.length / 2), (_, i) => String.fromCharCode(parseInt(caracteresHex.substr(i * 2, 2), 16))).join('');

    let resultado = "";
    let valor = 0;
    let l = 0;

    // Genera una clave hasta que se cumplan ciertos criterios.
    while (true) {
        let k = 0;
        let s = "";

        // Genera una serie de caracteres aleatorios.
        for (let i = 0; i < 5; i++) {
            const j = Math.floor(Math.random() * caracteres.length);
            s += caracteres.charAt(j);
            k += j + 36 * k;
        }

        // Asigna un valor de acuerdo a la variable 'l'.
        if (l === 1) {
            valor = 23;
        } else if (l === 2) {
            valor = 17;
        } else if (l === 3) {
            valor = 53;
        } else {
            valor = 43;
        }

        // Verifica si la clave generada cumple con ciertos criterios.
        if (k % valor === 0) {
            l += 1;
            resultado += s;
            if (l < 4) {
                resultado += '-';
            } else {
                break;
            }
        }
    }

    // Devuelve la clave generada.
    return resultado;
}

// Esta función genera un arreglo de claves de serie.
function generateSerials(count) {
    const resultado = [];

    // Genera la cantidad especificada de claves y las almacena en el arreglo.
    for (let lmt = 0; lmt < count; lmt++) {
        resultado.push(generateSerial());
    }

    return resultado;
}

// Define una cabecera y texto informativo.
const cabecera = `
    ╔══════════════════════════════════╗
    ║ Internet Download Manager v6.x.x ║
    ╚══════════════════════════════════╝ 
`

const texto = `Edición del archivo Hosts para bloquear las actualizaciones de IDM

    1️⃣. Navega a C:\\Windows\\System32\\drivers\\etc
    2️⃣. Abre el archivo hosts utilizando un editor de texto como el Bloc de notas.
    3️⃣. Copia y pega estas líneas al final del archivo HOSTS:
    
        127.0.0.1 tonec.com
        127.0.0.1 http://www.tonec.com
        127.0.0.1 registeridm.com
        127.0.0.1 http://www.registeridm.com
        127.0.0.1 secure.registeridm.com
        127.0.0.1 internetdownloadmanager.com
        127.0.0.1 http://www.internetdownloadmanager.com
        127.0.0.1 secure.internetdownloadmanager.com
        127.0.0.1 mirror.internetdownloadmanager.com
        127.0.0.1 mirror2.internetdownloadmanager.com
        127.0.0.1 mirror3.internetdownloadmanager.com

    4️⃣. Elimina: IDMGrHlp.exe
    5️⃣. Usa la clave generada:
    `

// Limpia la consola para obtener una salida limpia.
console.clear();

// Muestra la cabecera y mensajes informativos en la consola.
console.log('%c' + cabecera, 'color: gray; font-size:20px; font-weight:bold');
console.log('%c ⚠️ IMPORTANTE:', 'color: red; font-weight:bold', 'Las claves generadas no funcionarán a menos que bloquees la verificación de licencia en línea de IDM con un crack o parche.');
console.log('%c o: ', 'color: red; font-weight:bold', texto);

// Genera 11 claves de serie y las almacena en la variable 'serials'.
const serials = generateSerials(11);

// Crea un arreglo 'data' y convierte las claves en objetos con la propiedad 'serials'.
const data = [];

serials.forEach(function (char) {
    data.push({
        serials : char
    });
});

// Muestra los serials en forma de tabla en la consola.
console.table(data);
