const crearSection = (contenido, clase) => {
    const section = document.createElement("section");
    
    if (clase) {
        section.className = clase; // Asigna la clase si se proporciona
    }

    section.innerHTML = contenido;
    return section;
}

const crearArticulo = (contenido) => {
    const articulo = document.createElement("article");
    articulo.innerHTML = contenido;
    return articulo;
}

const ModPag = (content) => {
    const main = document.getElementsByTagName("main")[0];
    // Elimina todas las secciones existentes en el 'main'
    main.innerHTML = '';

    // Crea nuevas secciones y artículos basados en el contenido proporcionado
    content.forEach((sectionInfo) => {
        // Verifica si se debe agregar una clase a la sección
        const sec = crearSection(sectionInfo.content, sectionInfo.class);
        
        if(sectionInfo.articles){
            // Crea artículos dentro de la sección
            sectionInfo.articles.forEach((articleContent) => {
                const art = crearArticulo(articleContent);
                sec.appendChild(art);
            });   
        }
        
        main.appendChild(sec);
    });
}



const botonNav = (cont) => {
    ModPag(cont);
}

const inicio = () => {
    ModPag(PaginaInicio);
}

inicio();
