import { slugField } from 'payload'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { CollectionOverride } from '@payloadcms/plugin-ecommerce/types'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { DefaultDocumentIDType, Where, Field } from 'payload'

const hideEnableEUR = (fields: Field[]): Field[] => {
  return fields.map((field) => {
    if ('name' in field && field.name === 'priceInEUREnabled') {
      return {
        ...field,
        admin: {
          ...field.admin,
          hidden: true,
        },
        defaultValue: true,
      }
    }

    if ('name' in field && field.name === 'priceInEUR') {
      return {
        ...field,
        required: true,
      }
    }

    if ('fields' in field) {
      return {
        ...field,
        fields: hideEnableEUR(field.fields),
      }
    }

    if ('tabs' in field) {
      return {
        ...field,
        tabs: field.tabs.map((tab) => ({ ...tab, fields: hideEnableEUR(tab.fields) })),
      }
    }

    return field
  })
}

export const ProductsCollection: CollectionOverride = ({ defaultCollection }) => {
  const modifiedFields = hideEnableEUR(defaultCollection.fields)

  return {
    ...defaultCollection,
    admin: {
      ...defaultCollection?.admin,
      defaultColumns: ['title', 'enableVariants', '_status', 'variants.variants'],
      livePreview: {
        url: ({ data, req }) =>
          generatePreviewPath({
            slug: data?.slug,
            collection: 'products',
            req,
          }),
      },
      preview: (data, { req }) =>
        generatePreviewPath({
          slug: data?.slug as string,
          collection: 'products',
          req,
        }),
      useAsTitle: 'title',
    },
    defaultPopulate: {
      ...defaultCollection?.defaultPopulate,
      title: true,
      slug: true,
      variantOptions: true,
      variants: true,
      enableVariants: true,
      gallery: true,
      priceInUSD: true,
      inventory: true,
      meta: true,
    },
    fields: [
      { name: 'title', type: 'text', required: true, localized: true },
      {
        type: 'tabs',
        tabs: [
          {
            fields: [
              {
                name: 'description',
                type: 'richText',
                editor: lexicalEditor({
                  features: ({ rootFeatures }) => {
                    return [
                      ...rootFeatures,
                      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                      FixedToolbarFeature(),
                      InlineToolbarFeature(),
                      HorizontalRuleFeature(),
                    ]
                  },
                }),
                label: 'Description',
                required: false,
                localized: true,
              },
              {
                name: 'gallery',
                type: 'upload',
                relationTo: 'media',
                hasMany: true,
                required: false,
                admin: {
                  description: 'Upload multiple gallery images',
                },
              },
            ],
            label: 'Content',
          },
          {
            fields: [
              ...modifiedFields,
              {
                name: 'relatedProducts',
                type: 'relationship',
                filterOptions: ({ id }) => {
                  if (id) {
                    return {
                      id: {
                        not_in: [id],
                      },
                    }
                  }

                  // ID comes back as undefined during seeding so we need to handle that case
                  return {
                    id: {
                      exists: true,
                    },
                  }
                },
                hasMany: true,
                relationTo: 'products',
              },
            ],
            label: 'Product Details',
          },
          {
            name: 'meta',
            label: 'SEO',
            fields: [
              OverviewField({
                titlePath: 'meta.title',
                descriptionPath: 'meta.description',
                imagePath: 'meta.image',
              }),
              MetaTitleField({
                hasGenerateFn: true,
              }),
              MetaImageField({
                relationTo: 'media',
              }),

              MetaDescriptionField({}),
              PreviewField({
                // if the `generateUrl` function is configured
                hasGenerateFn: true,

                // field paths to match the target field for data
                titlePath: 'meta.title',
                descriptionPath: 'meta.description',
              }),
            ],
          },
        ],
      },
      {
        name: 'categories',
        type: 'relationship',
        admin: {
          position: 'sidebar',
          sortOptions: 'title',
        },
        hasMany: false,
        relationTo: 'categories',
      },
      slugField(),
    ],
  };
}
