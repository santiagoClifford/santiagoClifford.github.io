document.addEventListener('DOMContentLoaded', function() {
    const proyectoImagen = document.getElementById('proyecto-imagen');
    const proyectos = document.querySelectorAll('.proyectos-lista li');
    
    // Set default image (first project)
    if (proyectos.length > 0) {
        const firstImage = proyectos[0].getAttribute('data-img');
        proyectoImagen.src = firstImage;
    }

    // Add hover events to each project
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', function() {
            const imagePath = this.getAttribute('data-img');
            proyectoImagen.src = imagePath;
        });
    });
});
