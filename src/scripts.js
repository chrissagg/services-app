//api and function to show USD in real-time value 
const url = 'https://api.bluelytics.com.ar/v2/latest';

const cargarDolar = async() => {
  try {
    const respuesta = await fetch(url)

    console.log(respuesta)

    const datos = await respuesta.json()
    //console.log(datos.blue.value_buy)

    let dolarBlue = datos.blue.value_buy;
    // const container = document.querySelector(".container")
    const container = document.getElementById("container")
    const pusd = `<h6>Tomamos USD a valor actual AR$${dolarBlue}</h6>`

    // console.log(dolarBlue)
    container.innerHTML = pusd

  } catch(error){
    console.log(error)
  }
}

cargarDolar();

// modal event to show google calendar

function mostrar() {
  document.getElementById('modal').style.display = 'block'
}

function ocultar() {
  document.getElementById('modal').style.display = 'none'
}
