# **06-Movies App**

Una aplicación móvil que muestra películas utilizando la API de **MovieDB**. La app cuenta con varias pantallas: pantalla principal con lista de películas, detalles de cada película, y una página de carga. A continuación, se detalla el proceso para configurar y ejecutar el proyecto.

## **Pasos para Desarrollo**

### 1. **Clonar el Proyecto**
   Clona el repositorio del proyecto en tu máquina local utilizando el siguiente comando:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

### 2. **Instalar Dependencias**
   Dirígete al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   npm install
   ```

### 3. **Configurar Variables de Entorno**
   Copia el archivo `.env.template` y renómbralo a `.env`. Luego, configura las variables de entorno necesarias, como la clave de API de MovieDB.
   ```bash
   cp .env.template .env
   ```

   - Asegúrate de agregar tu **API Key** de MovieDB en el archivo `.env`.

### 4. **Ejecutar el Proyecto**
   Una vez que hayas instalado las dependencias y configurado las variables de entorno, ejecuta el siguiente comando para iniciar el servidor de desarrollo y abrir la aplicación en tu dispositivo o simulador:
   ```bash
   npx expo start
   ```

   Esto abrirá una nueva pestaña en tu navegador para que puedas escanear el código QR y ejecutar la app en tu dispositivo móvil utilizando Expo Go.

### 5. **Instalar Dependencias Adicionales**
   La aplicación requiere algunas dependencias adicionales para asegurar que todos los componentes funcionen correctamente. Instala las siguientes dependencias:

   ```bash
   # Para manejar las variables de entorno
   npm install -D react-native-dotenv

   # Para iconos personalizados
   npm install --save react-native-vector-icons
   npm install --save-dev @types/react-native-vector-icons
   ```

### 6. **Estructura de la App**
   La aplicación está estructurada en varias pantallas:

   - **Pantalla Principal**: Muestra una lista de películas utilizando la API de MovieDB.
   - **Detalles de la Película**: Muestra información detallada de una película seleccionada.
   - **Página de Carga**: Muestra una pantalla de carga mientras los datos se están obteniendo de la API.

### 7. **Configuración de la API**
   Asegúrate de que la API de MovieDB esté correctamente configurada en el archivo `.env`, con la clave correspondiente que te provee la plataforma. La API se usa para obtener los datos de las películas y sus detalles.
