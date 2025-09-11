const getInput= ()=>{
    let inputText= document.getElementById("inputID");
    let valor= inputText.value
    peticionApi(valor)
    if(valor>41){
        alert("UPS! te has pasado, pon un valor entre 1 y 41 :)")
    }
}

const peticionApi= (id)=>{
    const baseURL="https://api-colombia.com/"
    const endPoint= `api/v1/TouristicAttraction/${id}`

    const url= `${baseURL}${endPoint}`
    axios.get(url).then(res=> printData(res.data)).catch(error=> console.log(error))
}

const printData= (data)=>{
    let nombreAtraccion= document.getElementById("atraccion")
    nombreAtraccion.innerHTML=`<h2>${data["name"]}</h2>`
    let respuesta= document.getElementById("info_G")
    respuesta.innerHTML= `<p>${data["description"]}</p>
                        `
    let imagen= document.getElementById("Imagen")
    imagen.innerHTML=`<img src="${data.images[0]}" alt="${data.name}" width="445" onerror="this.onerror=null; this.src='images.png';">`

    let localizacion= document.getElementById("Ubicacion")
    localizacion.innerHTML= `<h2>Ubicación</h2>
                            <h5>🏢 Ciudad: ${data.city["name"]}</h5>
                            <h5>🌐 Latitud: ${data.latitude}</h5>
                            <h5>📏 Longitud: ${data.longitude}</h5>`
    let extra= document.getElementById("extra")

    const na= "Información no disponible por el momento"
    if(data.city["description"]==""){
        extra.innerHTML= `<h2>Otra información</h2>
                    <h5> 🚫 ${na}</h5>`
    } else{
    extra.innerHTML=`<h2>Otra información</h2>
                    <h5>🗂️ Descripción: ${data.city["description"]}</h5>`
    }
}

// //"latitude": "5.887894",
//     "longitude": "-74.6418",
//     "cityId": 88,
//     "city": {
//       "id": 88,
//       "name": "Puerto Triunfo",
//       "description": "",
//       "surface": null,
//       "population": null,
//       "postalCode": null,
//       "departmentId": 2,
//       "department": null,
//       "touristAttractions": [null],
//       "presidents": null,
//       "indigenousReservations": null,
//       "airports": null,
//       "radios": null
//     }
//
