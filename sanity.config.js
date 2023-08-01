// import { defineConfig } from 'sanity'
// import { deskTool } from 'sanity/desk'
// import { visionTool } from '@sanity/vision'
// import { schemaTypes } from './schemas'

// const devOnlyPlugins = [getStartedPlugin()]

// export default defineConfig({
//     name: 'default',
//     title: 'Resume',

//     projectId: 'w1h2v7s6',
//     dataset: 'production',

//     plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

//     schema: {
//         types: schemaTypes,
//     },
// })

import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
    name: 'default',
    title: 'Resume',

    projectId: 'w1h2v7s6',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

    schema: {
        types: schemaTypes,
    },
})