# Épica 5: Sistema de Recolección de Monedas (Estrellas)

## Objetivo
Añadir coleccionables (Estrellas) en los niveles para incentivar la exploración y la optimización de rutas (Gamificación).

## Requisitos
1. **Datos del Nivel:**
   - Ampliar la estructura del nivel para incluir las posiciones de 1 a 3 estrellas opcionales.
2. **Mecánica de Recolección:**
   - Durante la ejecución de los movimientos de Robotin, si su posición coincide con la de una estrella, esta se "recoge".
   - Reproducir el sonido de tintineo (chime) al recogerla.
3. **UI y Puntuación:**
   - Mostrar en la pantalla de victoria cuántas estrellas se recogieron en ese nivel (ej. 2/3).
   - Guardar el récord de estrellas de cada nivel en `AsyncStorage`.

## Tareas para el Agente (Issue #12)
- Actualizar tipos para soportar `stars: {x: number, y: number}[]`.
- Implementar la lógica de colisión con estrellas durante la evaluación del path.
- Integrar sonido de recogida.
- Guardar persistencia de las estrellas conseguidas.