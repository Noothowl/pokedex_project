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
    if(p.tipo == "Bicho"){
      //<i class="fas fa-spider"></i>                                  Symbol
      icono.classList.add("fas","fa-spider","fa-lg"); //AddClass, color, size
    }

    else if(p.tipo =="Siniestro"){
      //<i class="fas fa-mask"></i>
      icono.classList.add("fas", "fa-mask", "fa-lg");
    }

    else if(p.tipo =="Dragon"){
      //<i class="fas fa-dragon"></i>
      icono.classList.add("fas", "fa-dragon", "fa-lg");
    }

    else if(p.tipo =="Electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas", "fa-bolt", "text-warning", "fa-lg");
    }

    else if(p.tipo =="Hada"){
      //<i class="fas fa-heart"></i>
      icono.classList.add("fas", "fa-heart", "fa-lg");
    }

    else if(p.tipo =="Lucha"){
      //<i class="fas fa-fist-raised"></i>
      icono.classList.add("fas", "fa-fist-raised", "fa-lg");
    }

    else if(p.tipo =="Fuego"){
      //<i class="fas fa-fire"></i> 
      icono.classList.add("fas", "fa-fire", "text-danger", "fa-lg");
    }

    else if(p.tipo =="Volador"){
      //<i class="fas fa-wind"></i>
      icono.classList.add("fas", "fa-wind","fa-lg");
    }

    else if(p.tipo =="Fantasma"){
      //<i class="fas fa-ghost"></i>
      icono.classList.add("fas", "fa-ghost","fa-lg");
    }

    else if(p.tipo =="Planta"){
      //<i class="fas fa-leaf"></i>
      icono.classList.add("fas", "fa-leaf","text-success","fa-lg");
    }

    else if(p.tipo =="Tierra"){
      //<i class="fas fa-icicles"></i>
      icono.classList.add("fas", "fa-icicles","fa-lg");
    }

    else if(p.tipo =="Hielo"){
      //<i class="fas fa-snowflake"></i>
      icono.classList.add("fas", "fa-snowflake","fa-lg");
    }

    else if(p.tipo =="Normal"){
      //<i class="fas fa-circle"></i>
      icono.classList.add("fas", "fa-circle","fa-lg");
    }

    else if(p.tipo =="Veneno"){
      //<i class="fas fa-skull-crossbones"></i>
      icono.classList.add("fas", "fa-skull-crossbones","fa-lg");
    }

    else if(p.tipo =="Psiquico"){
      //<i class="fas fa-wifi"></i>
      icono.classList.add("fas", "fa-brain","fa-lg");
    }

    else if(p.tipo =="Roca"){
      //<i class="fas fa-mountain"></i>
      icono.classList.add("fas", "fa-mountain","fa-lg");
    }

    else if(p.tipo =="Acero"){
      //<i class="fas fa-shield-alt"></i>
      icono.classList.add("fas", "fa-shield-alt","fa-lg");
    }

    else if(p.tipo =="Agua"){
      //<i class="fas fa-tint"></i>
      icono.classList.add("fas", "fa-tint","text-primary","fa-lg");
    }

    // else if(p.tipo =="Type"){
    //   //Icon
    //   icono.classList.add("fas", "fa-class","fa=lg");
    // }
    
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
    //shiny toggle on/off
    let shiny = document.querySelector("#shiny-si").checked;
    //tipo obtenido
    let tipo = document.querySelector("#tipo-select").value;
    //CreateObj
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.shiny = shiny;
    pokemon.tipo = tipo;
    console.log(pokemon);

    console.log("el pokemono es", "'", nombre,"'", descripcion, shiny, tipo)
    //SaveStateList
    pokemones.push(pokemon); //Append
    //Notificacion
    LoadTable();             //call fn
    Swal.fire("Gotcha!", "Pokemon capturado", "success");
  } );
//DescriptionBox