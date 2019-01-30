const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const salidaLoteSchema = require('./salidaLote');
const devolucionesLoteSchema = require('./devolucionLote');






/**
 * Almacen un lote con las diferentes cantidades de salida y 
 * de entrada. Lo importante del manejo de lotes es que se sepa la cantidad 
 * de boton que resta de uno y de otro para que se entreguen cantidades por lote. 
 * 
 */
const LoteSchema = new Schema({

    /**`
     * Estos  valores on solo para guardar la referencia del lote. 
     */
    orden: {
        type: Schema.Types.ObjectId,
        ref: 'Folio.folioLinea.ordenes',
    },


    numero: { type: String, required: [true, 'Es necesario que definas el numero de lote.'] },

    //----------------------------------------------------------------


    /**
     * La existencia actualizada de este lote. 
     * Esta actualizacion se hace primero cuando se recive para
     * producto terminado el lote y segundo 
     * cuando hay una salida o devolucionl 
     */
    existencia: { type: Number, required: [true, 'Es necesario definir la existencia.'] },
    /**
     * La cantidad del lote que entro.
     */
    cantidadEntrada: { type: Number, required: [true, 'Es necesario definir la cantidad que entro en este lote.'] },

    /**
     * El registro de las salidas que va teniendo el lote. 
     */
    salidas: [salidaLoteSchema],
    devoluciones: [devolucionesLoteSchema]

}, { timestap: true, _id: null, });




module.exports = LoteSchema;