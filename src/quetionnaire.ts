import Fhir from 'fhir/r4';

const questionnaire: Fhir.Questionnaire = {
  resourceType: 'Questionnaire',
  title: 'New Form',
  status: 'draft',
  item: [
    {
      text: 'Item 0',
      type: 'choice',
      linkId: '4017470748703',
      repeats: true,
      required: false,
      readOnly: false,
      answerOption: [
        {
          valueCoding: {
            code: '1asd',
            display: 'gabriel',
          },
        },
        {
          valueCoding: {
            code: '2',
            display: 'elanan',
          },
        },
        {
          valueCoding: {
            code: '3',
            display: 'paulo',
          },
        },
        {
          valueCoding: {
            code: '4',
            display: 'karlos',
          },
        },
      ],
    },
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
          type: 'date',
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
    },
  ],
};

export default questionnaire;
