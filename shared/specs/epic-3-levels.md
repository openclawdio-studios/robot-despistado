# Épica 3: Diseño y Generación de 30 Niveles Progresivos

## Objetivo
Implementar la estructura de datos y el motor de carga para 30 niveles progresivos del juego "El Robot Despistado", donde Robotin debe alcanzar un engranaje dorado.

## Requisitos
1. **Estructura de Datos (`src/types/level.ts` o similar):**
   - Cada nivel debe definir un grid (ej. 5x5, 6x6).
   - Posición inicial de Robotin (x, y).
   - Posición de la meta (Engranaje Dorado) (x, y).
   - Obstáculos (asteroides, cráteres).
   - Bloques disponibles para el jugador (ej. solo puede usar 3 bloques de "Arriba", 2 de "Derecha").
2. **Generador/Archivo de Niveles (`src/data/levels.ts`):**
   - Definir los 30 niveles con dificultad progresiva.
   - Niveles 1-5: Introducción (sin obstáculos).
   - Niveles 6-15: Introducción de obstáculos simples.
   - Niveles 16-30: Laberintos más complejos y límite de bloques estricto.
3. **Selector de Niveles (UI):**
   - Una pantalla simple para seleccionar el nivel a jugar.
   - Desbloqueo progresivo (guardar el progreso en `AsyncStorage`).

## Tareas para el Agente (Issue #10)
- Crear los tipos e interfaces.
- Crear el array de 30 niveles.
- Integrar la carga del nivel en el estado del juego (`App.tsx` o store).