let RespuestaCorrecta;
let PreguntaActualIndex = 0;
let Respuestascorrectas = 0;
let respuestasconayuda = 0;

const cuestionario = [
    {"pregunta": "pararce",
    "respuestas": ["si", "no"]
    },
    {"pregunta": "pararce",
    "respuestas": ["si", "no"]
    },
    {"pregunta": "pararce",
    "respuestas": ["si", "no"]
    },
    
];

const printHTMLPreguntas = (i) => {
    PreguntaActualIndex++;
    const q = cuestionario[i];

    let a = q.respuestas;
    RespuestaCorrecta = a[0];
    const HTMLRespuestasArray = a.map( CurrentA => `<p class="preguntas"><button onClick="evaluacionRespuesta('${CurrentA}', this)">x</button><small>${CurrentA}</small></p>`);
    const HTMLRespuestas = HTMLRespuestasArray.join(' ')
    let HTMLPreguntasCode = `<p>${q.pregunta}</p><div>${HTMLRespuestas}</div>`;
    document.querySelector('.pregunta').innerHTML = HTMLPreguntasCode;


}

const evaluacionRespuesta = (respuestas, obj )=>{
    document.querySelectorAll(".preguntas").forEach(a => a.classList.remove('mas','same')); 
    const parentP = obj.parentNode;
    console.log('respuestas ' + respuestas + ', RespuestaCorrecta: ' + RespuestaCorrecta )
    if(respuestas == RespuestaCorrecta){
        parentP.classList.add('mas');
        Respuestascorrectas++;
        document.querySelector('.rigth').innerHTML = Respuestascorrectas;
    }else{
        parentP.classList.add('same');
        respuestasconayuda++;
        document.querySelector('.gronw').innerHTML = respuestasconayuda;
          
    }
}


 
printHTMLPreguntas(PreguntaActualIndex);