//Tinymc
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
//Tinymc

//ArrayList
  const pokemones = [];
//Fn Cargar Tabla
  const LoadTable = ()=>{                              //Fn creation
    let tbody = document.querySelector("#bodyTable");  //Table Ref
    tbody.innerHTML="";                                //Table cls
  for (let i=0; i< pokemones.length; ++i){             //ListReader
    let p = pokemones[i];
    let tr = document.createElement("tr");             //EachPkmn=>row

    //Genera td x campo
    let tdNro = document.createElement("td");

    tdNro.innerText = (i+1);                           //AsignAtributes
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
    let icono = document.createElement("i");           //TypeIcon
    if(p.tipo == "Agua"){
      //<i class="fas fa-tint"></i> Symbol
      icono.classList.add("fas","fa-tint","text-primary","fa-lg"); //AddClass

    }else if (p.tipo == "Planta"){
      //<i class="fas fa-leaf"></i>
      icono.classList.add("fas","fa-leaf","text-success","fa-lg");

    }else if (p.tipo == "Fuego"){
      //<i class="fas fa-fire"></i>
      icono.classList.add("fas","fa-fire", "text-danger","fa-lg");

    }else if (p.tipo == "Electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas","fa-bolt", "text-warning","fa-lg");
      
    }else if (p.tipo == "Normal"){
      //<i class="fas fa-star"></i>
      icono.classList.add("fas","fa-star","text-secondary","fa-lg");

    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(icono);

    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");

    //Agregar a tr (td =insert> tr)
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //Agregar td a la tabla
    tbody.appendChild(tr);
  }
};
//ArrayList

// DescriptionBox
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    //name obtenido
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //legendario toggle on/off
    let legendario = document.querySelector("#legendario-si").checked;
    //tipo obtenido
    let tipo = document.querySelector("#tipo-select").value;
    //CreateObj
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    console.log(pokemon);

    console.log("el pokemono es", "'", nombre,"'", descripcion, legendario, tipo)
    //SaveStateList
    pokemones.push(pokemon); //Append
    //Notificacion
    LoadTable();             //call fn
    Swal.fire("Gotcha!", "Pokemon capturado", "success");
  } );
//DescriptionBox