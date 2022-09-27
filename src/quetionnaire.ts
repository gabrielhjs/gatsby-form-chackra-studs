import Fhir from 'fhir/r4';

const questionnaire: Fhir.Questionnaire = {
  resourceType: 'Questionnaire',
  title: 'New Form',
  status: 'draft',
  item: [
    {
      text: 'Question 1',
      type: 'string',
      linkId: '1',
      item: [
        {
          text: 'help text',
          type: 'display',
          linkId: '1_helpText',
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
              valueCodeableConcept: {
                text: 'Help-Button',
                coding: [
                  {
                    code: 'help',
                    display: 'Help-Button',
                    system: 'http://hl7.org/fhir/questionnaire-item-control',
                  },
                ],
              },
            },
          ],
        },
      ],
      initial: [
        {
          valueString: 'initial answer',
        },
      ],
      repeats: false,
      required: true,
      readOnly: false,
      code: [
        {
          code: '1',
        },
      ],
    },
    {
      type: 'group',
      code: [
        {
          code: '2',
          display: 'Weight change',
        },
      ],
      required: false,
      text: 'Sinais vitais',
      linkId: '9346027484122',
      item: [
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '2710-2',
              display: 'SaO2 % BldC Oximetry',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: '%',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/2710-2',
          text: 'SaO2 % BldC Oximetry',
        },
        {
          type: 'quantity',
          code: [
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Weight Measured',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod',
              valueDuration: {
                value: 1,
                unit: 'year',
                system: 'http://ucum.org',
                code: 'a',
              },
            },
            {
              url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract',
              valueBoolean: true,
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: '[lb_av]',
                display: 'lbs',
                system: 'http://unitsofmeasure.org',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: 'kg',
                display: 'kgs',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/3141-9',
          text: 'Weight Measured',
          initial: [
            {
              valueQuantity: {
                unit: 'lbs',
                code: '[lb_av]',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '8287-5',
              display: 'Head Circumf OFC by Tape measure',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'cm',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8287-5',
          text: 'Head Circumf OFC by Tape measure',
        },
        {
          type: 'quantity',
          code: [
            {
              system: 'http://loinc.org',
              code: '8302-2',
              display: 'Bdy height',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod',
              valueDuration: {
                value: 1,
                unit: 'year',
                system: 'http://ucum.org',
                code: 'a',
              },
            },
            {
              url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract',
              valueBoolean: true,
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: '[in_i]',
                display: 'inches',
                system: 'http://unitsofmeasure.org',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: '[ft_i]',
                display: 'feet',
                system: 'http://unitsofmeasure.org',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: 'cm',
                display: 'centimeters',
                system: 'http://unitsofmeasure.org',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption',
              valueCoding: {
                code: 'm',
                display: 'meters',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8302-2',
          text: 'Bdy height',
          initial: [
            {
              valueQuantity: {
                unit: 'inches',
                code: '[in_i]',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '8310-5',
              display: 'Body temperature',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'Cel',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8310-5',
          text: 'Body temperature',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '8462-4',
              display: 'BP dias',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'mm[Hg]',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8462-4',
          text: 'BP dias',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '8480-6',
              display: 'BP sys',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'mm[Hg]',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8480-6',
          text: 'BP sys',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '8867-4',
              display: 'Heart rate',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: '{beats}/min',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/8867-4',
          text: 'Heart rate',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '9279-1',
              display: 'Resp rate',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: '{breaths}/min',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/9279-1',
          text: 'Resp rate',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '3140-1',
              display: 'BSA Derived',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'm2',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/3140-1',
          text: 'BSA Derived',
        },
        {
          type: 'decimal',
          code: [
            {
              system: 'http://loinc.org',
              code: '39156-5',
              display: 'BMI',
            },
          ],
          extension: [
            {
              url: 'http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression',
              valueExpression: {
                description: 'BMI calculation',
                language: 'text/fhirpath',
                expression: '((%weight/%height/%height*10 +0.5) div 1)/10',
              },
            },
            {
              url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit',
              valueCoding: {
                code: 'kg/m2',
                system: 'http://unitsofmeasure.org',
              },
            },
          ],
          required: false,
          linkId: '/39156-5',
          text: 'BMI',
        },
      ],
    },
  ],
};

export default questionnaire;
