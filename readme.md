# 🎁 Amigo Secreto - Challenge

<p align="center">
  <img src="assets/amigo-secreto.png" alt="Logo Amigo Secreto" width="200">
</p>

Este proyecto es un **sorteo interactivo de "Amigo Secreto"** desarrollado con **JavaScript, HTML y CSS**.  
Permite agregar participantes y realizar un sorteo aleatorio de dos nombres.  

---

## 📌 Funcionalidades
<ul>
  <li>✅ Agregar nombres a la lista de participantes.</li>
  <li>✅ Validar los nombres (solo letras, sin caracteres especiales ni números).</li>
  <li>✅ Evitar nombres duplicados.</li>
  <li>✅ Mostrar la lista de amigos agregados.</li>
  <li>✅ Sortear dos nombres aleatoriamente.</li>
  <li>✅ Mostrar los resultados en pantalla.</li>
</ul>

---
## 📂 Abrir el proyecto
Abre el archivo index.html en tu navegador.
---

📂 Estructura del Proyecto

📁 amigo-secreto/
│── 📄 index.html       # Estructura de la página 

│── 🎨 style.css        # Estilos visuales

│── 🖥️ app.js           # Lógica del sorteo en JavaScript

│── 📄 README.md        # Documentación del proyecto

└── 📂 assets/          # Carpeta con imágenes y recursos

---

<h2>💡 Explicación del código</h2>

<h3>🔹 agregarAmigo()</h3>
<ul>
  <li>Obtiene el nombre ingresado y lo valida (solo letras y sin duplicados).</li>
  <li>Agrega el nombre a la lista de amigos en pantalla.</li>
</ul>

<h3>🔹 sortearAmigo()</h3>
<ul>
  <li>Verifica que haya mínimo dos nombres.</li>
  <li>Mezcla la lista y selecciona dos nombres al azar.</li>
  <li>Muestra el resultado en pantalla.</li>
</ul>

---

🔧 Posibles Problemas y Soluciones
<table> <tr> <th>Problema</th> <th>Solución</th> </tr> <tr> <td>No se pueden ingresar números</td> <td>Solo se permiten letras, revisa tu entrada.</td> </tr> <tr> <td>El botón de sorteo no funciona</td> <td>Asegúrate de tener al menos dos nombres en la lista.</td> </tr> <tr> <td>Los nombres se repiten</td> <td>El sistema evita duplicados, revisa antes de ingresar.</td> </tr> </table>
📜 Licencia
<p>Este proyecto es de código abierto y puedes usarlo o mejorarlo libremente. 📖✨</p>

<p align="center">🎉 ¡Diviértete sorteando tu Amigo Secreto! 🎁</p> ```
