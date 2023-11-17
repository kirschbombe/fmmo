
db.createCollection( 'textual_artifacts', {validator: {$jsonSchema: {bsonType: 'object',title:'textual_artifacts',required: [         'id',          'ark',          'artifact_type',          'locus',          'lang',          'work_wit',          'defective',          'iiif',          'parts'],properties: {id: {bsonType: 'objectId'},ark: {bsonType: 'string'},artifact_type: {enum: primary, uto, supplementary(?)},locus: {bsonType: 'object'},summary: {bsonType: 'string'},lang: {bsonType: 'array',items: {bsonType: 'objectId'}},paratext: {bsonType: 'array',items: {
title:'object',required: [         'id',          'para_type',          'locus',          'lang',          'hand'],properties: {id: {bsonType: 'objectId'},para_type: {enum: rubric, subscription, dedication, inscription, ...},locus: {bsonType: 'string'},event: {enum: },lang: {bsonType: 'array',items: {bsonType: 'objectId'}},label: {bsonType: 'string'},note: {bsonType: 'string'},transcription: {bsonType: 'string'},translation: {bsonType: 'string'},assoc_person: {bsonType: 'array',items: {
title:'object',required: [         'person_id',          'role'],properties: {person_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},role: {enum: },note: {bsonType: 'string'}}}},assoc_place: {bsonType: 'array',items: {
title:'object',required: [         'place_id',          'event'],properties: {place_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},event: {enum: },note: {bsonType: 'string'}}}},assoc_date: {bsonType: 'array',items: {
title:'object',required: [         'date_type',          'date'],properties: {date_type: {enum: },date: {bsonType: 'date'},as_written: {bsonType: 'string'},note: {bsonType: 'string'}}}},hand: {bsonType: 'object',
title:'object',required: [         'writing system',          'script'],properties: {writing system: {bsonType: 'objectId'},script: {bsonType: 'objectId'},script_note: {bsonType: 'string'},hand_note: {bsonType: 'string'}}},features: {enum: },refs: {bsonType: 'array',items: {
title:'object',required: [         'ref_id'],properties: {ref_id: {bsonType: 'objectId'},ref_pg: {bsonType: 'string'},ref_note: {bsonType: 'string'}}}}}}},assoc_person: {bsonType: 'array',items: {
title:'object',required: [         'person_id',          'role'],properties: {person_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},role: {enum: },note: {bsonType: 'string'}}}},defective: {bsonType: 'bool'},condition_note: {bsonType: 'string'},features: {enum: },refs: {bsonType: 'array',items: {
title:'object',required: [         'ref_id'],properties: {ref_id: {bsonType: 'objectId'},ref_pg: {bsonType: 'string'},ref_note: {bsonType: 'string'}}}},bib: {bsonType: 'array',items: {
title:'object',required: [         'bib_id'],properties: {bib_id: {bsonType: 'objectId'},bib_pg: {bsonType: 'string'},bib_note: {bsonType: 'string'}}}},iiif: {bsonType: 'array',items: {
title:'object',properties: {iiif_manifest: {bsonType: 'string'},text_direction: {bsonType: 'objectId'},behavior: {bsonType: 'objectId'},range: {bsonType: 'object'}}}},cataloguer: {bsonType: 'array',items: {
title:'object',properties: {cataloguer_id: {bsonType: 'objectId'},cataloguer_note: {bsonType: 'string'}}}},parts: {bsonType: 'objectId'}},
patternProperties: {"work_wit": {bsonType: 'array',items: {
title:'object',required: [         'sequence',          'locus'],properties: {work_id: {bsonType: 'objectId'},label: {bsonType: 'string'},as_written: {bsonType: 'string'},sequence: {bsonType: 'string'},locus: {bsonType: 'string'},incipit: {bsonType: 'object',
title:'object',required: [         'locus',          'transcription'],properties: {locus: {bsonType: 'string'},transcription: {bsonType: 'string'},translation: {bsonType: 'string'}}},explicit: {bsonType: 'object',
title:'object',required: [         'locus',          'transcription'],properties: {locus: {bsonType: 'string'},transcription: {bsonType: 'string'},translatation: {bsonType: 'string'}}},contents: {bsonType: 'array',items: {
title:'object',required: [         'item'],properties: {item: {bsonType: 'object',
title:'object',}}}},assoc_person: {bsonType: 'object',
title:'object',required: [         'person_id',          'role'],properties: {person_id: {bsonType: 'objectId'},as_written: {bsonType: 'string'},role: {enum: },note: {bsonType: 'string'}}},note: {bsonType: 'string'},refs: {bsonType: 'array',items: {
title:'object',required: [         'ref_id'],properties: {ref_id: {bsonType: 'objectId'},ref_pg: {bsonType: 'string'},ref_note: {bsonType: 'string'}}}}}}}}         }      }});  