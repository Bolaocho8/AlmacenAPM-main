import Big from "big.js";
import operate from "./operate";
import isNumber from "./isNumber";

function isDecimal(value) {
    return !Number.isInteger(parseFloat(value));
}

export default function operaciones(estado, nombreDeBoton) {
    if (nombreDeBoton === "AC") {
        return {
            total: null,
            siguiente: null,
            operador: null
        };
    }
    
    if (isNumber(nombreDeBoton)) {
        if (nombreDeBoton === "0" && estado.siguiente === "0") return {};

        if (estado.operador) {
            if (estado.siguiente) return { siguiente: estado.siguiente + nombreDeBoton };
            return { siguiente: nombreDeBoton };
        }

        if (estado.siguiente) {
            const siguiente = estado.siguiente === "0" ? nombreDeBoton : estado.siguiente + nombreDeBoton;
            return { siguiente, total: null };
        }

        return { siguiente: nombreDeBoton, total: null };
    }

    if (nombreDeBoton === "%") {
        if (estado.siguiente) {
            const siguiente = Big(estado.siguiente).div(Big(100)).toString();
            return { siguiente };
        }
        return {};
    }

    if (nombreDeBoton === ".") {
        if (estado.siguiente) {
            if (estado.siguiente.includes(".")) return {};
            return { siguiente: estado.siguiente + "." };
        }
        return { siguiente: "0." };
    }

    if (nombreDeBoton === "=") {
        if (estado.siguiente && estado.operador) {
            return {
                total: operate(estado.total, estado.siguiente, estado.operador),
                siguiente: null,
                operador: null
            };
        }
        return {};
    }

    if (nombreDeBoton === "+/-") {
        if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() };
        if (estado.total) return { total: (-1 * parseFloat(estado.total)).toString() };
        return {};
    }

    if (estado.operador) {
        return {
            total: operate(estado.total, estado.siguiente, estado.operador),
            siguiente: null,
            operador: nombreDeBoton
        };
    }

    if (!estado.siguiente) return { operador: nombreDeBoton };

    return {
        total: estado.siguiente,
        siguiente: null,
        operador: nombreDeBoton
    };
}

