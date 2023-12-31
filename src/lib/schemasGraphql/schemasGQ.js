import {  gql } from 'graphql-request';

export const PERSONA_ASOCIADO  = gql`
query miQuery($id:String!){
 persona(IDENTIFICACION:$id){
     NOMBRE
     NOMBRES
     APELLIDOS
     OFICINA
     EMPRESA_LABORA
     FECHA_AFILIACION
     COD_PERSONA
     TIPO_PERSONA
     IDENTIFICACION 
     DIGITO_VERIFICACION
     TIPO_IDENTIFICACION
     FECHAEXPEDICION 
     CODCIUDADEXPEDICION
     SEXO 
     PRIMER_NOMBRE 
     SEGUNDO_NOMBRE 
     PRIMER_APELLIDO 
     SEGUNDO_APELLIDO 
     RAZON_SOCIAL 
     FECHANACIMIENTO 
     CODCIUDADNACIMIENTO
     CODESTADOCIVIL
     CODESCOLARIDAD
     CODACTIVIDAD 
     DIRECCION 
     TELEFONO 
     CODCIUDADRESIDENCIA
     ANTIGUEDADLUGAR
     TIPOVIVIENDA 
     ARRENDADOR 
     TELEFONOARRENDADOR 
     CELULAR 
     EMAIL 
     EMPRESA 
     TELEFONOEMPRESA
     CODCARGO
     CODTIPOCONTRATO
     COD_OFICINA
     COD_ASESOR
     RESIDENTE 
     FECHA_RESIDENCIA 
     TRATAMIENTO 
     ESTADO 
     COD_ZONA
     VALORARRIENDO
     DIRECCIONEMPRESA 
     ANTIGUEDADLUGAREMPRESA
     BARRESIDENCIA
     DIRCORRESPONDENCIA 
     TELCORRESPONDENCIA 
     CIUCORRESPONDENCIA
     BARCORRESPONDENCIA
     NUMHIJOS
     NUMPERSONASACARGO
     PROFESION 
     SALARIO
     ANTIGUEDADLABORAL
     ESTRATO
     CELULAREMPRESA 
     CIUDADEMPRESA
     POSICIONEMPRESA
     ACTIVIDADEMPRESA 
     PARENTESCOEMPLEADO
     FECHACREACION 
     USUARIOCREACION 
     FECULTMOD 
     USUULTMOD 
     TIPO_ACTO_CREACION
     NUM_ACTO_CREACION 
     NOMBRE_FUNCIONARIO 
     FECHA_INGRESOEMPRESA 
     EMPLEADO_ENTIDAD
     MUJER_FAMILIA
     JORNADA_LABORAL
     OCUPACION
     IDESCALAFON
     COD_NOMINA 
     CODSECTOR
     CAMARA_COMERCIO 
     COD_REPRESENTANTE
     ENTE_TERRITORIAL
     NACIONALIDAD
     UBICACION_RESIDENCIA
     UBICACION_CORRESPONDENCIA
     NIT_EMPRESA
     TIPO_EMPRESA
     ACT_CIIU_EMPRESA
     PARENTESCO_MADMINIS
     PARENTESCO_MCONTROL
     PARENTESCO_PEP
     UBICACION_EMPRESA
     ACCESO_OFICINA
     GRUPO_ETNICO
     PADRE_FAMILIA
     NUMHIJOSACARGO
     IDENT_REPRESENTANTE_EMPRESA 
     NOMBRE_REPRESENTANTE_EMPRESA 
     CLASIF_EMPRESA
     CODPAISRESIDENCIA
     CODDEPARTAMENTORESIDENCIA
     CODPAISCORRESPONDENCIA
     CODDEPARTAMENTOCORRESPONDENCIA
     CODDEPARTAMENTONACIMIENTO
     COD_TIPO_ENVIO_EXTRACTO
     FECHA_TERMINACION_CONTRATO 
     DESCUENTO 
     DESCUENTOOTRO 
     OCUPACIONADICIONALDETALLE 
     OCUPACIONADICIONALCIIU 
     OCUPACIONADICIONALNEMPLEADOS 
     PROTECCIONDATOS 
     AUTORIZACION 
     DECLARACION 
     CODIGOEMPRESA 
     COD_COLEGIO 
     COD_SEDE_COLEGIO 
     AUTORIZA_TRATAMIENTO 
     AUTORIZA_PUBLICIDAD 
     RESOLUCION_PENSION  
     IMAGEN
     ACTIVO
    }
}`	   


export const ESTADO_PERSONA_ASOCIADO  = gql`
query EstadoPersonaDelegado($id: String!) {
    estadoPersonaDelegado(IDENTIFICACION: $id) {
      COD_PERSONA
      IDENTIFICACION
      NOMBRE
      OFICINA
      CELULAR
      EMAIL
      ACTIVO
      ACTIVOB
      ACTIVOA
      ACTIVOC
      N
    }
  
  }`	   