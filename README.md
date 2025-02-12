# 🌟 ProgressBar.js - Documentación Oficial

ProgressBar.js es una biblioteca en JavaScript que permite crear barras de progreso animadas y personalizables.

## 📥 Instalación

### Opción 1: Descargar el archivo minificado
1. Descarga el archivo `progressbar.min.js`.
2. Agrégalo a tu proyecto en la carpeta `js/`.
3. Importa el script en tu HTML:
   ```html
   <script src="js/progressbar.min.js"></script>
   ```

### Opción 2: Usar un CDN *(Próximamente)*

---

## 🚀 Cómo usar ProgressBar.js

### 📌 Crear una instancia de `ProgressBar`
Para generar una barra de progreso, usa la clase `ProgressBar` con sus opciones configurables.

```js
const progressBar = new ProgressBar({
    parent: "#progress-container",
    width: '300px',
    height: '30px',
    fillColor: 'blue',
    backgroundColor: '#ddd',
    maxValue: 100,
    value: 50,
    showText: true,
    animationSpeed: 400
});
```

Esto creará una barra dentro del elemento con el ID `progress-container`.

---

## 🎨 Tipos de `fillColor`
El atributo `fillColor` define el color o animación de la barra de progreso.

- **Colores simples**: `red`, `blue`, `green`, `#ff5733`, etc.
- **Animaciones predefinidas**:
  - `multicolor` 🌈 (Degradado arcoíris animado)
  - `pulse` 🔄 (Cambio de color pulsante)
  - `wave` 🌊 (Movimiento de onda)
  - `fire` 🔥 (Efecto de fuego dinámico)
  - `ocean` 🌊 (Tonos de mar animados)
  - `neon` 💡 (Brillo neón resplandeciente)
  - `shadow` 🎭 (Sombra oscilante)

Ejemplo:
```js
const progressBar = new ProgressBar({
    parent: "#progress-container",
    fillColor: "neon"
});
```

---

## 🔄 Método `update(value)`
El método `update(value)` permite actualizar la barra dinámicamente:

```js
progressBar.update(75); // Cambia el progreso al 75%
```

También se puede usar con botones:
```html
<button onclick="incrementar()">Incrementar</button>
<button onclick="disminuir()">Disminuir</button>

<script>
function incrementar() {
    progressBar.update(progressBar.value + 10);
}
function disminuir() {
    progressBar.update(progressBar.value - 10);
}
</script>
```

---

## 🔄 Crear múltiples barras de progreso dinámicamente
Puedes generar varias barras de progreso con diferentes animaciones de forma automática:
```js
const types = ["multicolor", "pulse", "wave", "fire", "ocean", "neon", "shadow"];
const progressBars = {};

types.forEach(type => {
    progressBars[type] = new ProgressBar({
        parent: `#progress-${type}`,
        width: '300px',
        height: '30px',
        fillColor: type,
        backgroundColor: '#ddd',
        maxValue: 100,
        value: 50,
        showText: true,
        animationSpeed: 400
    });
});
```
Esto generará automáticamente una barra para cada tipo de `fillColor`.

---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Puedes abrir un issue o enviar un pull request con mejoras o nuevas funciones.

---

## 📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo libremente en tus proyectos.

---

📌 **¡Empieza a usar `ProgressBar.js` hoy y mejora la experiencia de tus usuarios! 🚀🔥**

