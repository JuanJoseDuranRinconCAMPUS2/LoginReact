import { body } from "express-validator";

export const vProductos = [

    body("nombre_Producto")
    .notEmpty().withMessage("nombre_Producto no debe estar vacio")
    .isString().withMessage("nombre_Producto debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Producto solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Producto debe tener máximo 100 caracteres"),

    body("precio_Producto")
    .notEmpty().withMessage("precio_Producto no debe estar vacio")
    .isNumeric().withMessage("precio_Producto debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("precio_Producto debe ser un número positivo");
        }
        return true;
    }),

    body("url_img_Producto")
    .notEmpty().withMessage("url_img_Producto no debe estar vacio")
    .isString().withMessage("url_img_Producto debe ser un string")
    .isLength({ max: 600 }).withMessage("url_img_Producto debe tener máximo 600 caracteres"),,

    body("altura_Producto")
    .notEmpty().withMessage("altura_Producto no debe estar vacio")
    .isString().withMessage("altura_Producto debe ser un string")
    .matches(/^[0-9]+(\.[0-9]+)?[mM]$/).withMessage("altura_Producto solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("altura_Producto debe tener máximo 50 caracteres"),

    body("unidades_Producto")
    .notEmpty().withMessage("unidades_Producto no debe estar vacio")
    .isNumeric().withMessage("unidades_Producto debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("unidades_Producto debe ser un número positivo");
        }
        return true;
    }),

    body("lugar_conserva_Ali")
    .notEmpty().withMessage("lugar_conserva_Ali no debe estar vacio")
    .isString().withMessage("lugar_conserva_Ali debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("lugar_conserva_Ali solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 600 }).withMessage("lugar_conserva_Ali debe tener máximo 600 caracteres")
]