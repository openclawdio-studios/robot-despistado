# Épica 1: Motor de Audio y Efectos de Sonido

## Objetivo
Proveer feedback auditivo inmediato a las acciones del jugador mediante efectos de sonido, cumpliendo con el pilar de diseño para niños (Atención Volátil).

## Requisitos
1. **Librería de Audio:** Instalar e integrar `expo-av`.
2. **Gestor de Audio:** Crear un servicio (`AudioService.ts`) o un Hook (`useAudio.ts`) para manejar la precarga y reproducción de sonidos.
3. **Sonidos Requeridos (pueden ser placeholders iniciales):**
   - **Éxito:** Fanfarria corta al llegar al engranaje.
   - **Moneda:** Tintineo (chime) rápido y agudo al pasar por una estrella.
   - **Error/Colisión:** "Bip" robótico de fallo grave.
   - **Ignición/Play:** Sonido mecánico o de cohete al iniciar la ejecución de los bloques.
4. **Ciclo de Vida:** Asegurar que los sonidos se descargan de la memoria cuando los componentes se desmontan para evitar memory leaks.

## Tareas para el Agente
- Configurar `expo-av`.
- Implementar la lógica de precarga en la inicialización de la app.
- Proveer métodos fáciles de usar (ej. `playSound('success')`).
- Integrar la llamada a estos métodos en el motor de ejecución y el componente de meta.