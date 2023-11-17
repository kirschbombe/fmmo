
db.createCollection( 'parts', {validator: {$jsonSchema: {bsonType: 'object',title:'parts',required: [         'id',          'ark',          'part_type',          'locus',          'origin',          'support',          'extent',          'dim',          'writing',          'features',          'textual_artefacts',          'condition_note',          'reference',          'bibliography',          'ms_objects'],properties: {id: {bsonType: 'objectId'},ark: {bsonType: 'string'},part_type: {enum: },summary: {bsonType: 'string'},locus: {bsonType: 'object'},origin: {bsonType: 'object'},support: {enum: },extent: {bsonType: 'string'},dim: {bsonType: 'array',items: {
title:'object',properties: {type: {enum: },value: {bsonType: 'string'}}}},page_layout: {bsonType: 'array',items: {
title:'object',properties: {locus: {bsonType: 'string'},columns: {bsonType: 'string'},num_lines: {bsonType: 'string'},text_block: {bsonType: 'string'},margins: {bsonType: 'string'},note: {bsonType: 'string'}}}},writing: {bsonType: 'array',items: {
title:'object',required: [         'script'],properties: {script: {bsonType: 'array',items: {bsonType: 'objectId'}},script_note: {bsonType: 'string'},hand_note: {bsonType: 'string'},locus: {bsonType: 'string'}}}},collation: {bsonType: 'string'},collation_note: {bsonType: 'string'},fol: {bsonType: 'string'},fol_note: {bsonType: 'string'},features: {enum: },textual_artefacts: {bsonType: 'array',items: {
title:'object',required: [         'text_artifact_id',          'sequence'],properties: {text_artifact_id: {bsonType: 'objectId'},sequence: {bsonType: 'int'}}}},paratext: {bsonType: 'array',items: {
title:'object',required: [         'id',          'para_type',          'locus',          'lang',          'hand'],properties: {id: {bsonType: 'objectId'},para_type: {enum: rubric, subscription, dedication, inscription, ...},locus: {bsonType: 'string'},event: {enum: },lang: {bsonType: 'array',items: {bsonType: 'objectId'}},label: {bsonType: 'string'},note: {bsonType: 'string'},transcription: {bsonType: 'string'},translation: {bsonType: 'string'},assoc_person: {bsonType: 'array',items: {
title:'object',required: [         'person_id',          'role'],properties: {person_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},role: {enum: },note: {bsonType: 'string'}}}},assoc_place: {bsonType: 'array',items: {
title:'object',required: [         'place_id',          'event'],properties: {place_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},event: {enum: },note: {bsonType: 'string'}}}},assoc_date: {bsonType: 'array',items: {
title:'object',required: [         'date_type',          'date'],properties: {date_type: {enum: },date: {bsonType: 'date'},as_written: {bsonType: 'string'},note: {bsonType: 'string'}}}},hand: {bsonType: 'object',
title:'object',required: [         'writing system',          'script'],properties: {writing system: {bsonType: 'objectId'},script: {bsonType: 'objectId'},script_note: {bsonType: 'string'},hand_note: {bsonType: 'string'}}},features: {enum: },refs: {bsonType: 'array',items: {
title:'object',required: [         'ref_id'],properties: {ref_id: {bsonType: 'objectId'},ref_pg: {bsonType: 'string'},ref_note: {bsonType: 'string'}}}}}}},assoc_person: {bsonType: 'object',
title:'object',required: [         'person_id',          'role'],properties: {person_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},role: {enum: },note: {bsonType: 'string'}}},assoc_date: {bsonType: 'array',items: {
title:'object',required: [         'date_type',          'date'],properties: {date_type: {enum: },date: {bsonType: 'date'},as_written: {bsonType: 'string'},note: {bsonType: 'string'}}}},assoc_place: {bsonType: 'array',items: {
title:'object',required: [         'place_id',          'event'],properties: {place_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},event: {enum: },note: {bsonType: 'string'}}}},ornamentation: {bsonType: 'array',items: {
title:'object',required: [         'features'],properties: {features: {enum: },orn_note: {bsonType: 'array',items: {bsonType: 'string'}}}}},provenance: {bsonType: 'array',items: {bsonType: 'string'}},condition_note: {bsonType: 'string'},reference: {bsonType: 'array',items: {bsonType: 'objectId'}},bibliography: {bsonType: 'array',items: {bsonType: 'objectId'}},iiif: {bsonType: 'array',items: {
title:'object',required: [         'manifest_type',          'iiif_manifest'],properties: {manifest_type: {enum: },iiif_manifest: {bsonType: 'string'},text_direction: {enum: },behavior: {enum: },range: {bsonType: 'undefined'}}}},viscodex: {bsonType: 'array',items: {bsonType: 'string'}},cataloguer: {bsonType: 'array',items: {bsonType: 'objectId'}},ms_objects: {bsonType: 'objectId'}}         }      }});  