var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ReportePersonalizadoAlmacenProduccionSchema = new Schema(
  {
    nombre: { type: String, required: [true, "Debes definir un nombre"] },
    descripcion: String,
    articulos: {
      type: [{ type: Schema.Types.ObjectId, ref: "Articulo" }],
      validate: [
        {
          validator: function(v) {
            return new Promise(resolve => {
              resolve(this.articulos.length > 0)
            })
          },
          msg: "Es necesario por lo menos un articulo"
        }
      ]
    }
  },

  { collection: "reportesPersonalizadosAlmacenProduccion", timestamps: true }
)


function autoPopulate (next) {
  this.populate("articulos", ' -salidas -entradas')
  next()
}

ReportePersonalizadoAlmacenProduccionSchema
  .pre("find", autoPopulate)
  .pre("findById", autoPopulate)
  .pre("findOne", autoPopulate)

module.exports = mongoose.model(
  "ReportePersonalizadoAlmacenProduccion",
  ReportePersonalizadoAlmacenProduccionSchema
)
