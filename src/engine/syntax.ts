import { ThemePalette } from '../types.js';

export function createSemanticTokenColors(p: ThemePalette): Record<string, string | { foreground?: string; fontStyle?: string; italic?: boolean; bold?: boolean }> {
  return {
    'variable': p.syntax.variable,
    'variable.readonly': p.syntax.variable,
    'variable.defaultLibrary': p.syntax.special,
    'parameter': p.syntax.parameter,
    'function': p.syntax.func,
    'function.defaultLibrary': p.syntax.func,
    'member': p.syntax.func,
    'method': p.syntax.func,
    'property': p.syntax.property,
    'property.readonly': p.syntax.property,
    'property.defaultLibrary': p.syntax.property,
    'class': p.syntax.type,
    'interface': p.syntax.type,
    'enum': p.syntax.type,
    'enumMember': p.syntax.number,
    'type': p.syntax.type,
    'type.defaultLibrary': p.syntax.type,
    'typeParameter': p.syntax.type,
    'keyword': p.syntax.keyword,
    'comment': { foreground: p.syntax.comment, italic: true },
    'string': p.syntax.string,
    'number': p.syntax.number,
    'regexp': p.syntax.regexp,
    'operator': p.syntax.operator,
    'namespace': p.syntax.type,
    'macro': p.syntax.special,
    'selfKeyword': { foreground: p.syntax.special, italic: true },
    'builtinType': p.syntax.type,
    'magicFunction': p.syntax.func,
  };
}

export function createTokenColors(p: ThemePalette) {
  return [
    // Comments & Documentation
    {
      name: 'Comments',
      scope: [
        'comment',
        'comment.line',
        'comment.block',
        'comment.block.documentation',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: {
        foreground: p.syntax.comment,
        fontStyle: 'italic',
      },
    },

    // Keywords & Control Flow
    {
      name: 'Keywords & Control',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.flow',
        'keyword.control.conditional',
        'keyword.control.loop',
        'keyword.control.return',
        'keyword.control.trycatch',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
        'keyword.other.unit',
      ],
      settings: {
        foreground: p.syntax.keyword,
      },
    },

    // Storage Types & Modifiers
    {
      name: 'Storage & Declarations',
      scope: [
        'storage',
        'storage.type',
        'storage.type.function',
        'storage.type.class',
        'storage.type.interface',
        'storage.type.type',
        'storage.type.enum',
        'storage.type.struct',
        'storage.modifier',
        'storage.modifier.async',
      ],
      settings: {
        foreground: p.syntax.storage,
      },
    },

    // Types, Classes, Interfaces & Namespaces
    {
      name: 'Types & Classes',
      scope: [
        'entity.name.type',
        'entity.name.type.class',
        'entity.name.type.interface',
        'entity.name.type.enum',
        'entity.name.type.module',
        'entity.name.class',
        'entity.other.inherited-class',
        'support.class',
        'support.type',
        'support.type.primitive',
        'entity.name.namespace',
        'entity.name.scope-resolution',
      ],
      settings: {
        foreground: p.syntax.type,
      },
    },

    // Functions & Methods
    {
      name: 'Functions & Methods',
      scope: [
        'entity.name.function',
        'entity.name.function.member',
        'support.function',
        'support.function.macro',
        'meta.function-call entity.name.function',
        'meta.function-call support.function',
        'variable.function',
      ],
      settings: {
        foreground: p.syntax.func,
      },
    },

    // Function Parameters & Arguments
    {
      name: 'Function Parameters',
      scope: [
        'variable.parameter',
        'variable.parameter.function',
        'meta.parameter',
        'parameters variable.function',
      ],
      settings: {
        foreground: p.syntax.parameter,
      },
    },

    // Variables & Constants
    {
      name: 'Variables',
      scope: [
        'variable',
        'variable.other',
        'variable.other.readwrite',
        'variable.other.declaration',
        'variable.other.local',
      ],
      settings: {
        foreground: p.syntax.variable,
      },
    },

    // Object Properties & Struct Fields
    {
      name: 'Properties & Fields',
      scope: [
        'variable.other.property',
        'variable.other.object.property',
        'support.type.property-name',
        'meta.object-literal.key',
        'entity.name.field',
        'variable.other.enummember',
      ],
      settings: {
        foreground: p.syntax.property,
      },
    },

    // Strings & Characters
    {
      name: 'Strings',
      scope: [
        'string',
        'string.quoted',
        'string.quoted.single',
        'string.quoted.double',
        'string.template',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
        'punctuation.definition.template-expression',
      ],
      settings: {
        foreground: p.syntax.string,
      },
    },

    // Numbers & Booleans & Constants
    {
      name: 'Numbers & Constants',
      scope: [
        'constant.numeric',
        'constant.numeric.integer',
        'constant.numeric.float',
        'constant.numeric.hex',
        'constant.language',
        'constant.language.boolean',
        'constant.language.null',
        'constant.language.undefined',
        'constant.other',
        'variable.other.constant',
      ],
      settings: {
        foreground: p.syntax.number,
      },
    },

    // HTML / JSX / Vue / Svelte Tags & Components
    {
      name: 'Tags',
      scope: [
        'entity.name.tag',
        'entity.name.tag.html',
        'entity.name.tag.jsx',
        'entity.name.tag.tsx',
        'meta.tag.sgml',
        'punctuation.definition.tag',
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag.end',
      ],
      settings: {
        foreground: p.syntax.tag,
      },
    },

    // HTML / JSX Attributes
    {
      name: 'Tag Attributes',
      scope: [
        'entity.other.attribute-name',
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.jsx',
        'entity.other.attribute-name.tsx',
      ],
      settings: {
        foreground: p.syntax.attribute,
      },
    },

    // CSS / SCSS Selectors & Properties
    {
      name: 'CSS Properties & Classes',
      scope: [
        'support.type.property-name.css',
        'support.type.property-name.scss',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ],
      settings: {
        foreground: p.syntax.property,
      },
    },
    {
      name: 'CSS Values & Units',
      scope: [
        'support.constant.property-value.css',
        'keyword.other.unit.css',
        'constant.other.color.rgb-value.hex.css',
      ],
      settings: {
        foreground: p.syntax.number,
      },
    },

    // Operators
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.assignment',
        'keyword.operator.arithmetic',
        'keyword.operator.comparison',
        'keyword.operator.logical',
        'keyword.operator.ternary',
        'keyword.operator.type',
      ],
      settings: {
        foreground: p.syntax.operator,
      },
    },

    // Punctuation & Delimiters
    {
      name: 'Punctuation & Delimiters',
      scope: [
        'punctuation',
        'punctuation.separator',
        'punctuation.separator.comma',
        'punctuation.separator.key-value',
        'punctuation.terminator',
        'punctuation.accessor',
        'punctuation.bracket',
        'punctuation.section',
      ],
      settings: {
        foreground: p.syntax.punctuation,
      },
    },

    // Special variables: `this`, `self`, `super`, `arguments`
    {
      name: 'Special Variables',
      scope: [
        'variable.language',
        'variable.language.this',
        'variable.language.super',
        'variable.language.self',
        'variable.language.arguments',
      ],
      settings: {
        foreground: p.syntax.special,
        fontStyle: 'italic',
      },
    },

    // Regular Expressions
    {
      name: 'Regex',
      scope: [
        'string.regexp',
        'constant.other.character-class.regexp',
        'constant.character.escape.backslash.regexp',
      ],
      settings: {
        foreground: p.syntax.regexp,
      },
    },

    // Markdown
    {
      name: 'Markdown Headings',
      scope: [
        'markup.heading',
        'punctuation.definition.heading.markdown',
        'entity.name.section.markdown',
      ],
      settings: {
        foreground: p.syntax.keyword,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Bold',
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold', foreground: p.syntax.parameter },
    },
    {
      name: 'Markdown Italic',
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic', foreground: p.syntax.special },
    },
    {
      name: 'Markdown Code Block',
      scope: [
        'markup.raw.inline.markdown',
        'markup.raw.block.markdown',
      ],
      settings: {
        foreground: p.syntax.string,
      },
    },
    {
      name: 'Markdown Links',
      scope: [
        'markup.underline.link',
        'string.other.link.title.markdown',
      ],
      settings: {
        foreground: p.syntax.func,
      },
    },

    // JSON
    {
      name: 'JSON Property Names',
      scope: [
        'support.type.property-name.json',
        'source.json meta.structure.dictionary.json > string.quoted.double.json',
      ],
      settings: {
        foreground: p.syntax.property,
      },
    },
  ];
}
