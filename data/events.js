map.removeLayer(layer_Lmitedelacuenca_35);
//MAPA BASE
$("#mapabase_l1").attr('checked', true); 
$("#mapabase_l2").attr('checked', true);
$("#mapabase_l3").attr('checked', true);
$("#mapabase_l4").attr('checked', true);
$("#mapabase_l5").attr('checked', true);
$("#mapabase_l6").attr('checked', true);
$("#mapabase_l7").attr('checked', true);
//$("#mapabase_l8").attr('checked', true);




$(document).ready(function(){  
    $("#mapabase_l1").click(function() {  
        if($("#mapabase_l1").is(':checked')) {  
            map.addLayer(layer_Lmitedelacuenca_35);
        } else {  
            map.removeLayer(layer_Lmitedelacuenca_35);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l2").click(function() {  
        if($("#mapabase_l2").is(':checked')) {  
            map.addLayer(layer_Seccionesdelacuenca_36);
        } else {  
            map.removeLayer(layer_Seccionesdelacuenca_36);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l3").click(function() {  
        if($("#mapabase_l3").is(':checked')) {  
            map.addLayer(layer_RoMagdalena_34);
        } else {  
            map.removeLayer(layer_RoMagdalena_34);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l4").click(function() {  
        if($("#mapabase_l4").is(':checked')) {  
            map.addLayer(layer_RedHidrolgica_33);
        } else {  
            map.removeLayer(layer_RedHidrolgica_33);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l5").click(function() {  
        if($("#mapabase_l5").is(':checked')) {  
            map.addLayer(layer_Alcaldias_32);
        } else {  
            map.removeLayer(layer_Alcaldias_32);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l6").click(function() {  
        if($("#mapabase_l6").is(':checked')) {  
            map.addLayer(layer_LmiteAVABME_31);
        } else {  
            map.removeLayer(layer_LmiteAVABME_31);
            
        }  
    });  
  
});  


$(document).ready(function(){  
    $("#mapabase_l7").click(function() {  
        if($("#mapabase_l7").is(':checked')) {  
            map.addLayer(layer_Curvasdenivel50m_30);
        } else {  
            map.removeLayer(layer_Curvasdenivel50m_30);
            
        }  
    });  
  
});  


//######################################################//
//Hidrología//
//######################################################//

$(document).ready(function(){  
    $("#mapahidrologia_l1").click(function() {  
        if($("#mapahidrologia_l1").is(':checked')) {  
            map.addLayer(layer_Manantiales_28);
        } else {  
            map.removeLayer(mapalayer_Manantiales_28hidrologia_l1);
            
        }  
    });  
  
});  


//######################################################//
//Precipitaciones//
//######################################################//

$(document).ready(function(){  
    $("#mapaprecipitacion_l1").click(function() {  
        if($("#mapaprecipitacion_l1").is(':checked')) {  
            map.addLayer(layer_PrecipitacionCRM_27);
        } else {  
            map.removeLayer(layer_PrecipitacionCRM_27);
            
        }  
    });  
  
});  


//######################################################//
//Recarga//
//######################################################//

$(document).ready(function(){  
    $("#maparecarga_l1").click(function() {  
        if($("#maparecarga_l1").is(':checked')) {  
            map.addLayer(layer_RecargasCRM_26);
        } else {  
            map.removeLayer(layer_RecargasCRM_26);
            
        }  
    });  
  
});  

//######################################################//
//Geología//
//######################################################//

$(document).ready(function(){  
    $("#mapageologia_l1").click(function() {  
        if($("#mapageologia_l1").is(':checked')) {  
            map.addLayer(layer_Geologa_25);
        } else {  
            map.removeLayer(layer_Geologa_25);
            
        }  
    });  
  
});  


//######################################################//
//Calidad del Agua//
//######################################################//

$(document).ready(function(){  
    $("#mapacalidadagua_l1").click(function() {  
        if($("#mapacalidadagua_l1").is(':checked')) {  
            map.addLayer(layer_Calidaddelagua_23);
        } else {  
            map.removeLayer(layer_Calidaddelagua_23);
            
        }  
    });  
  
});  

$(document).ready(function(){  
    $("#mapacalidadagua_l2").click(function() {  
        if($("#mapacalidadagua_l2").is(':checked')) {  
            map.addLayer(layer_Plantasdetratamientopotabilizadora_24);
        } else {  
            map.removeLayer(layer_Plantasdetratamientopotabilizadora_24);
            
        }  
    });  
  
});  



//######################################################//
//Clima//
//######################################################//

$(document).ready(function(){  
    $("#mapaclima_l1").click(function() {  
        if($("#mapaclima_l1").is(':checked')) {  
            map.addLayer(layer_Climas_20);
        } else {  
            map.removeLayer(layer_Climas_20);
            
        }  
    });  
  
});  


//######################################################//
//Edafologia//
//######################################################//

$(document).ready(function(){  
    $("#mapatemperatura_l1").click(function() {  
        if($("#mapatemperatura_l1").is(':checked')) {  
            map.addLayer(layer_Edafologa_19);
        } else {  
            map.removeLayer(layer_Edafologa_19);
            
        }  
    });  
  
});  



//######################################################//
//Vegetacion//
//######################################################//

$(document).ready(function(){  
    $("#mapavegetacion_l1").click(function() {  
        if($("#mapavegetacion_l1").is(':checked')) {  
            map.addLayer(layer_Vegetacin_17);
        } else {  
            map.removeLayer(layer_Vegetacin_17);
            
        }  
    });  
  
});  

//######################################################//
//Muerdago//
//######################################################//

$(document).ready(function(){  
    $("#mapamuerdago_l1").click(function() {  
        if($("#mapamuerdago_l1").is(':checked')) {  
            map.addLayer(layer_PresenciaObservada_16);
        } else {  
            map.removeLayer(layer_PresenciaObservada_16);
            
        }  
    });  
  
});  

$(document).ready(function(){  
    $("#mapamuerdago_l2").click(function() {  
        if($("#mapamuerdago_l2").is(':checked')) {  
            map.addLayer(layer_Cobertura_15);
        } else {  
            map.removeLayer(layer_Cobertura_15);
            
        }  
    });  
  
});  

//######################################################//
//Sitios de Referencia//
//######################################################//

$(document).ready(function(){  
    $("#mapasitiosreferencia_l1").click(function() {  
        if($("#mapasitiosreferencia_l1").is(':checked')) {  
            map.addLayer(layer_Sitiosdereferencia_14);
        } else {  
            map.removeLayer(layer_Sitiosdereferencia_14);
            
        }  
    });  
  
});  


//######################################################//
//Uso de suelo//
//######################################################//

$(document).ready(function(){  
    $("#mapausosuelo_l1").click(function() {  
        if($("#mapausosuelo_l1").is(':checked')) {  
            map.addLayer(layer_Usodesuelo_13);
        } else {  
            map.removeLayer(layer_Usodesuelo_13);
            
        }  
    });  
  
});  


//######################################################//
//Tenencia de Tierra//
//######################################################//

$(document).ready(function(){  
    $("#mapatenenciatierra_l1").click(function() {  
        if($("#mapatenenciatierra_l1").is(':checked')) {  
            map.addLayer(layer_Comunidadesyejidos_12);
        } else {  
            map.removeLayer(layer_Comunidadesyejidos_12);
            
        }  
    });  
  
});  


//######################################################//
//Legislacion//
//######################################################//

$(document).ready(function(){  
    $("#mapalegislacion_l1").click(function() {  
        if($("#mapalegislacion_l1").is(':checked')) {  
            map.addLayer(layer_Decretode2012_11);
        } else {  
            map.removeLayer(layer_Decretode2012_11);
            
        }  
    });  
  
});  

$(document).ready(function(){  
    $("#mapalegislacion_l2").click(function() {  
        if($("#mapalegislacion_l2").is(':checked')) {  
            map.addLayer(layer_PGOEDFde2000_10);
        } else {  
            map.removeLayer(layer_PGOEDFde2000_10);
            
        }  
    });  
  
});  
$(document).ready(function(){  
    $("#mapalegislacion_l3").click(function() {  
        if($("#mapalegislacion_l3").is(':checked')) {  
            map.addLayer(layer_Acuerdo1947_9);
        } else {  
            map.removeLayer(layer_Acuerdo1947_9);
            
        }  
    });  
  
});  

$(document).ready(function(){  
    $("#mapalegislacion_l4").click(function() {  
        if($("#mapalegislacion_l4").is(':checked')) {  
            map.addLayer(layer_Decreto1932_8);
        } else {  
            map.removeLayer(layer_Decreto1932_8);
            
        }  
    });  
  
});  

//######################################################//
//Instrumentos de Conservación//
//######################################################//

$(document).ready(function(){  
    $("#mapaconservacion_l1").click(function() {  
        if($("#mapaconservacion_l1").is(':checked')) {  
            map.addLayer(layer_AreasNaturales_0);
        } else {  
            map.removeLayer(layer_AreasNaturales_0);
            
        }  
    });  
  
});  

$(document).ready(function(){  
    $("#mapaconservacion_l2").click(function() {  
        if($("#mapaconservacion_l2").is(':checked')) {  
            map.addLayer(layer_RTP_1);
        } else {  
            map.removeLayer(layer_RTP_1);
            
        }  
    });  
  
});  
$(document).ready(function(){  
    $("#mapaconservacion_l3").click(function() {  
        if($("#mapaconservacion_l3").is(':checked')) {  
            map.addLayer(layer_AICA_2);
        } else {  
            map.removeLayer(layer_AICA_2);
            
        }  
    });  
  
});  
