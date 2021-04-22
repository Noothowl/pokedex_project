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
  
// DescriptionBox
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    //name obtenido
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //legendario toggle on/off
    let legendario = document.querySelector("#legendario-si").checked;
    //tipo obtenido
    let tipo = document.querySelector("#tipo-select").value;

    console.log("el pokemono es", "'", nombre,"'", descripcion, legendario, tipo)
} );
//DescriptionBox