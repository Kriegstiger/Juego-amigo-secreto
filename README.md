# Amigo Secreto - Proyecto Interactivo

## Descripción

Este proyecto es una página web interactiva diseñada para gestionar una lista de nombres y realizar un sorteo al azar. Está pensado como una práctica de lógica de programación, manipulación del DOM y estructuras de control en JavaScript. La página incluye funciones esenciales para agregar nombres, mostrar una lista, verificar duplicados y realizar sorteos, junto con una experiencia de usuario mejorada gracias a mensajes de alerta y controles adicionales.

---

## Características

### Funcionalidades principales:

- **Agregar nombres:** Permite al usuario ingresar nombres para formar una lista.
- **Alertas y validaciones:**
  - Aviso si el campo de entrada está vacío.
  - Advertencia si el nombre ya existe en la lista.
- **Mostrar lista:** Los nombres ingresados se muestran dinámicamente en la página.
- **Sortear un nombre al azar:** El sistema elige un nombre al azar de la lista, evitando repetir el último nombre sorteado.
- **Borrar lista:** Un botón adicional permite limpiar la lista por completo.

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-repositorio/amigo-secreto.git
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd amigo-secreto
   ```
3. **Abrir el archivo HTML en un navegador web:**
   - Ubica el archivo `index.html` en el directorio.
   - Haz doble clic para abrirlo en tu navegador favorito.

No se requieren dependencias adicionales para ejecutar el proyecto, ya que utiliza solo HTML, CSS y JavaScript puro.

---

## Uso de la página

1. **Agregar nombres:**
   - Ingresa un nombre en el campo de texto.
   - Presiona el botón "Añadir" para incluirlo en la lista.
2. **Validaciones:**
   - Si el campo está vacío, se mostrará una alerta: *"Por favor, escribe un nombre válido."*
   - Si intentas agregar un nombre que ya existe, aparecerá un aviso: *"El nombre ya está en la lista, ingrese otro por favor."*
3. **Sortear nombres:**
   - Presiona el botón "Sortear amigo" para elegir un nombre al azar.
   - Si solo hay un nombre en la lista, aparecerá un mensaje indicando que no se puede realizar un sorteo.
4. **Borrar lista:**
   - Presiona el botón "Borrar lista" para eliminar todos los nombres y reiniciar la página.

---

## Posibles errores

### Errores comunes:

1. **El archivo **``** no está vinculado correctamente al HTML:**
   - Verifica que el script esté enlazado correctamente en el archivo `index.html`:
     ```html
     <script src="app.js" defer></script>
     ```
2. **Ruta incorrecta de las imágenes:**
   - Asegúrate de que las imágenes utilizadas en los botones (por ejemplo, el ícono de borrar) estén en la carpeta `assets` y que el atributo `src` en el HTML sea correcto.

---

## Nota

El código original fue ampliado con un botón adicional para borrar la lista, mejorando significativamente la experiencia del usuario al permitir una limpieza rápida y eficaz de los datos ingresados.

---

## Estructura del proyecto

```
amigo-secreto/
├── index.html   # Archivo principal del proyecto
├── app.js       # Lógica de la aplicación en JavaScript
├── style.css    # Estilo del proyecto (si aplica)
├── assets/      # Carpeta para las imágenes del proyecto
│   ├── erase_icon.png
│   └── play_circle_outline.png
```

---

## Contribuciones

Si deseas contribuir al proyecto, puedes enviar un pull request o reportar problemas en el repositorio. ¡Tu colaboración es bienvenida!

---

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente mientras incluyas esta nota de licencia en cualquier copia.


