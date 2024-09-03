import { useEffect, useRef, useState } from "react";

enum Operator {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "÷",
}

export const useCalculator = () => {
    const [formula, setFormula] = useState("");
    const [number, setNumber] = useState("0");
    const [prevNumber, setPrevNumber] = useState("0");

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(" ").at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    const clean = () => {
        setNumber("0");
        setPrevNumber("0");
        lastOperation.current = undefined;
        setFormula("");
    };

    //Borrar el último numero
    const deleteOperation = () => {
        // Si el número es "0" o está vacío, no hacer nada
        if (number === "0" || number.length === 0) return;

        // Si el número es solo un dígito, limpiarlo y poner "0"
        if (number.length === 1) {
            setNumber("0");
            return;
        }

        // Eliminar el último carácter del número
        const newNumber = number.slice(0, -1);

        // Si el nuevo número es vacío, poner "0"
        if (newNumber === "") {
            setNumber("0");
        } else {
            setNumber(newNumber);
        }
        // let currentSign = "";
        // let temporaryNumber = number;
        // if (number.includes("-")) {
        //     currentSign = "-";
        //     temporaryNumber = number.substring(1);
        // }

        // if (temporaryNumber.length > 1) {
        //     return setNumber(currentSign + temporaryNumber.slice(0, -1));
        // }
        // setNumber("0");
    };

    const toggleSign = () => {
        if (number.includes("-")) {
            return setNumber(number.replace("-", ""));
        }

        setNumber("-" + number);
    };

    const buildNumber = (numberString: string) => {
        if (number.includes(".") && numberString === ".") return;
        if (number.startsWith("0") || number.startsWith("-0")) {
            // Condicional para solo un punto decimal
            if (numberString === ".") {
                return setNumber(number + numberString);
            }

            //evaluar si es otro cero y no hay punto
            if (numberString === "0" && number.includes(".")) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de 0, no hay punto decimal y es el primer numero
            if (numberString !== "0" && !number.includes(".")) {
                return setNumber(numberString);
            }
            // evaluar el 000.00 antes del punto decimal
            if (numberString === "0" && !number.includes(".")) {
                return;
            }
            return setNumber(number + numberString);
        }
        setNumber(number + numberString);
    };

    const setLastNumber = () => {
        if (number.endsWith(".")) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }

        setNumber("0");
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPrevNumber("0");
    };

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(" ");
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);
        if (isNaN(num2)) return num1;
        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num2 - num1;

            case Operator.divide:
                return num1 / num2;

            case Operator.multiply:
                return num1 * num2;

            default:
                throw new Error("Operation not implemented");
        }
    };

    return {
        //properties
        formula,
        number,
        prevNumber,

        //methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateResult,
    };
};
