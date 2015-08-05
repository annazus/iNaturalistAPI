var _ = require( "underscore" ),
    InaturalistAPI = require( "./inaturalist_api" ),
    util = require( "./util" ),
    routes = { };

routes.index = function( req, res ) {
  res.send( "iNaturalist API" ).end( );
};

routes.observations_index = function( req, res ) {
  InaturalistAPI.observationsIndex( req, function( err, data ) {
    if( err ) { return util.renderError( err ); }
    res.jsonp( data );
  });
};

routes.observations_show = function( req, res ) {
  routes.show( "observations", req, res );
};

routes.taxa_autocomplete = function( req, res ) {
  InaturalistAPI.taxaAutocomplete( req, function( err, data ) {
    if( err ) { return util.renderError( err ); }
    res.jsonp( data );
  });
};

routes.show = function( indexName, req, res ) {
  InaturalistAPI.fetchIDs( req, indexName, function( err, data ) {
    if( err ) { return util.renderError( err ); }
    res.jsonp( data );
  });
};

module.exports = routes;