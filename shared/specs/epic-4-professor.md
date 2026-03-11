# Épica 4: Interfaz del Profesor Virtual (Feedback Emocional)

## Objetivo
Añadir un personaje de apoyo (Profesor Virtual) en la pantalla que reaccione a las acciones del jugador, proporcionando validación emocional y reduciendo la frustración ante los errores.

## Requisitos
1. **Componente Visual (`VirtualProfessor.tsx`):**
   - Un pequeño avatar animado en una esquina de la pantalla.
   - No requiere texto, su comunicación es puramente visual (expresiones faciales).
2. **Estados Emocionales (Reacciones):**
   - **Idle (Reposo):** Parpadeo ocasional, sonrisa leve.
   - **Thinking/Executing:** Cara de concentración o curiosidad mientras Robotin se mueve.
   - **Success (Éxito):** Celebración, alegría grande (cuando se recoge la meta o estrella).
   - **Error (Colisión/Fallo):** Cara de sorpresa o confusión cómica, animando a intentar de nuevo.
3. **Integración:** El componente debe estar conectado al estado global del motor de juego para reaccionar en tiempo real a los eventos.

## Tareas para el Agente
- Crear el componente `VirtualProfessor`.
- Diseñar las distintas "caras" usando la librería vectorial de la Épica 1.
- Añadir animaciones sutiles (ej. rebotar al celebrar) con `Reanimated`.
- Conectar el avatar a los estados del motor (ejecutando, éxito, error).