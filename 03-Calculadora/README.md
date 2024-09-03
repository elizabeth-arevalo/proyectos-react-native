# Calculator App

Este es un proyecto de una aplicación de calculadora desarrollada en React Native. La aplicación proporciona una interfaz interactiva que permite a los usuarios realizar operaciones matemáticas básicas como suma, resta, multiplicación, división, y manipulación de números (cambiar signo, eliminar último dígito, etc.).

## Tabla de Contenidos

-   [Calculator App](#calculator-app)
    -   [Tabla de Contenidos](#tabla-de-contenidos)
    -   [Instalación](#instalación)
    -   [Uso](#uso)
-   [Componentes](#componentes)
    -   [Props de `CalculatorButton`](#props-de-calculatorbutton)
    -   [Hooks Personalizados](#hooks-personalizados)
        -   [Funciones del hook:](#funciones-del-hook)
    -   [Configuración de Estilos](#configuración-de-estilos)

## Instalación

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-repo/calculator-app.git
    cd calculator-app
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Ejecuta la aplicación en el emulador o dispositivo físico:

    ```bash
    npm run start
    ```

## Uso

El componente principal es `App`, el cual renderiza la interfaz de la calculadora. Para utilizarlo en tu proyecto, importa y usa este componente de la siguiente manera:

```tsx
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CalculatorScreen } from "./screens/CalculatorScreen";
import { styles } from "./config/theme/app-theme";

export default function App() {
    return (
        <View style={styles.background}>
            <StatusBar style="auto" backgroundColor="black" />
            <CalculatorScreen />
        </View>
    );
}
```

# Componentes

`CalculatorScreen` CalculatorScreen es el componente principal que representa la interfaz de usuario de la calculadora. Utiliza botones interactivos para permitir que el usuario realice operaciones matemáticas. También muestra el número actual, el número anterior, y la fórmula de la operación.

## Props de `CalculatorButton`

El componente `CalculatorButton` representa cada botón de la calculadora.

-   label: Texto que se muestra en el botón.
-   onPress: Función que se ejecuta cuando el botón es presionado.
-   color: Color de fondo del botón.
-   blackText: Propiedad booleana que cambia el color del texto a negro.
-   doubleSize: Propiedad booleana que permite al botón ocupar el doble de espacio horizontal.

## Hooks Personalizados

`useCalculator`
El hook useCalculator maneja toda la lógica de la calculadora, incluyendo las operaciones matemáticas, la manipulación de números y la gestión del estado.

### Funciones del hook:

-   buildNumber(numberString: string): Construye el número actual en función del input del usuario.
-   toggleSign(): Cambia el signo del número actual.
-   clean(): Limpia todos los valores y reinicia la calculadora.
-   deleteOperation(): Borra el último dígito del número actual.
-   divideOperation(), addOperation(), subtractOperation(), multiplyOperation(): Ejecuta las operaciones matemáticas correspondientes.
-   calculateResult(): Calcula y muestra el resultado de la operación matemática actual.

## Configuración de Estilos

El componente utiliza estilos personalizados definidos en `src/config/theme/app-theme`
