# Guía: Crear la factura en Stripe

Carolina crea las facturas en Stripe. Esta guía da la estructura y un ejemplo de líneas. Carolina completa los campos entre corchetes.

## Datos de la factura

- Negocio: CVS Latino Services LLC
- Cliente: [NOMBRE DEL CLIENTE]
- Fecha: [FECHA]

## Ejemplo de líneas

| Concepto | Monto |
|----------|-------|
| [SERVICIO] | [MONTO] |
| Abono consulta inicial (pagada el [FECHA]) | -$80.00 |
| Total | [TOTAL] |

Si el cliente ya pagó la consulta inicial de $80, réstala como abono. Si no aplica, quita esa línea.

## Pasos

1. Crea la factura en Stripe con el nombre del negocio CVS Latino Services LLC.
2. Agrega las líneas del servicio y, si aplica, el abono de la consulta inicial.
3. Describe el servicio como "preparación de formularios" o "servicio de notaría", no como asesoría legal.
4. Copia el link de la factura de Stripe y envíalo por WhatsApp.

## Notas

- Confirma montos y datos antes de enviar.
- La política de cancelación está en carolinabeelitz.com/politica-de-cancelacion.
