
db.createCollection( 'part', {validator: {$jsonSchema: {bsonType: 'object',title:'part',required: [         'id',          'type',          'label',          'locus',          'origin',          'assoc_person',          'assoc_place',          'support',          'language',          'writing_hands',          'condition_note',          'feature',          'reference',          'bibliography',          'extent',          'dimensions',          'iiif',          'ms_objects'],properties: {id: {bsonType: 'objectId'},type: {bsonType: 'objectId'},label: {bsonType: 'string'},locus: {bsonType: 'object'},origin: {bsonType: 'object'},assoc_person: {bsonType: 'array',items: {bsonType: 'object'}},assoc_place: {bsonType: 'array',items: {bsonType: 'object'}},support: {bsonType: 'array',items: {bsonType: 'objectId'}},language: {bsonType: 'array',items: {bsonType: 'objectId'}},writing_hands: {bsonType: 'array',items: {bsonType: 'object'}},condition_note: {bsonType: 'string'},feature: {bsonType: 'array',items: {bsonType: 'objectId'}},reference: {bsonType: 'array',items: {bsonType: 'objectId'}},bibliography: {bsonType: 'array',items: {bsonType: 'objectId'}},extent: {bsonType: 'string'},dimensions: {bsonType: 'object',
title:'dimensions',properties: {type: {bsonType: 'objectId'},value: {bsonType: 'string'}}},collation: {bsonType: 'string'},collation_note: {bsonType: 'string'},decoration: {bsonType: 'string'},page_layout: {bsonType: 'object',
title:'page_layout',properties: {columns: {bsonType: 'int'},num_lines: {bsonType: 'int'},note: {bsonType: 'string'}}},colophon: {bsonType: 'array',items: {
title:'paratext',required: [         'locus',          'transcription',          'translation'],properties: {locus: {bsonType: 'string'},transcription: {bsonType: 'string'},translation: {bsonType: 'string'}}}},provenance: {bsonType: 'string'},viscodex: {bsonType: 'string'},iiif: {bsonType: 'object',
title:'iiif',properties: {iiif_manifest: {bsonType: 'string'},text_direction: {bsonType: 'objectId'},behavior: {bsonType: 'objectId'},range: {bsonType: 'object'}}},cataloguer: {bsonType: 'array',items: {bsonType: 'objectId'}},ms_objects: {bsonType: 'objectId'}}         }      }});  