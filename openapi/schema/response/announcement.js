const Joi = require( "joi" );

module.exports = Joi.object( ).keys( {
  id: Joi.number( ).integer( ).required( ),
  body: Joi.string( ),
  placement: Joi.string( ),
  dismissible: Joi.boolean( ),
  start: Joi.date( ),
  end: Joi.date( )
} ).unknown( false ).meta( { className: "Announcement" } );
