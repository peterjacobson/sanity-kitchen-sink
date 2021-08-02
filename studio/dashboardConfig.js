export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61076196e990ee3f8b7a585f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f5f32emh',
                  apiId: '3d07284d-f7c9-47d1-9a25-99a92e6a2e82'
                },
                {
                  buildHookId: '6107619621527d2257fb41ab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xjg9tuk7',
                  apiId: 'f69f0c25-4e0d-4c8d-9be9-4f87c07198a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterjacobson/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xjg9tuk7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
