import { GenericRoute } from 'types/portal-config'
import { publications, studies, data, tools } from './synapseConfigs'
import routeButtonControlWrapperProps from './routeButtonControlWrapperProps'
import { studyDetailPage } from './synapseConfigs/studies'
import { toolsDetailsLandingPage } from './synapseConfigs/tools'

const routes: GenericRoute[] = [
  {
    to: '',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Goals',
        title: ' ',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn23518009',
        },
      },
      {
        name: 'Markdown',
        outsideContainerClassName: 'home-bg-dark home-spacer',
        props: {
          ownerId: 'syn22151275',
        },
      },
      {
        name: 'FeaturedDataTabs',
        title: 'COLLECTIONS',
        centerTitle: false,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          sql:'SELECT * FROM syn21994974',
          rgbIndex: 3,
          explorePagePath:'/Explore/Collections',
          exploreObjectType:'',
          configs: [{
            title: 'Studies',
            icon: 'STUDY',
            plotsConfig: {
              explorePagePath: '',
              sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Validation Study\' OR "collectionType" = \'Interventional Study\' OR "collectionType" = \'Observational Study\' ) )',
              configs: [{
                title:'The Religious Orders and Memory and Aging Project Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'ROSMAP',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn3219045'
              },
              {
                title:'The Mount Sinai Brain Bank Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'MSBB',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn3159438'
              },
              {
                title:'The RNAseq Harmonization Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'rnaSeqReprocessing',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn9702085'
              }]
            }
          },
          {
            title: 'Analysis',
            icon: 'CHART',            
            plotsConfig: {
              sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Analysis\' OR "collectionType" = \'Challenge\' ) )',
              configs: [{                
                title:'The UCI MODEL-AD 5XFAD Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'UCI_5XFAD',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn16798076'
              },
              {
                title:'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'Jax.IU.Pitt_PrimaryScreen',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn21595258'
              },
              {
                title:'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
                facetsToPlot:['dataType', 'assay'],
                selectFacetColumnName:'study',
                selectFacetColumnValue:'Jax.IU.Pitt_APOE4.Trem2.R47H',
                detailsPagePath:'/Explore/Studies/DetailsPage?Study=syn17095980'
              }
            ]}
          }]        
        },
      },
      {
        name: 'TableFeedCards',
        title: 'What\'s New',
        centerTitle: true,
        props: {
          tableEntityId: 'syn23520190',
        },
      },
    ],
  },
  {
    to: 'Explore',
    isNested: true,
    routes: [
      {
        to: 'Collections',
        isNested: true,
        synapseConfigArray: [
          {
            name: 'RouteButtonControlWrapper',
            title: 'EXPLORE',
            containerClassName: 'container-full-width',
            props: {
              ...routeButtonControlWrapperProps,
              synapseConfig: studies.explorePageSynapseObject,
            },
          },
        ],
        routes: [
          {
            to: 'DetailsPage',
            isNested: false,
            synapseConfigArray: studyDetailPage,
          },
        ],
      },
      {
        to: 'Data',
        isNested: false,
        synapseConfigArray: [
          {
            name: 'RouteButtonControlWrapper',
            title: 'EXPLORE',
            containerClassName: 'container-full-width',
            props: {
              ...routeButtonControlWrapperProps,
              synapseConfig: data.explorePageSynapseObject,
            },
          },
        ],
      },
      {
        to: 'Tools',
        isNested: true,
        synapseConfigArray: [
          {
            name: 'RouteButtonControlWrapper',
            title: 'EXPLORE',
            containerClassName: 'container-full-width',
            props: {
              ...routeButtonControlWrapperProps,
              synapseConfig: tools.explorePageSynapseObject,
            },
          },
        ],
        routes: [
          {
            to: 'DetailsPage',
            isNested: false,
            synapseConfigArray: toolsDetailsLandingPage,
          },
        ],
      },
      {
        to: 'Publications',
        isNested: false,
        synapseConfigArray: [
          {
            name: 'RouteButtonControlWrapper',
            title: 'EXPLORE',
            containerClassName: 'container-full-width',
            props: {
              ...routeButtonControlWrapperProps,
              synapseConfig: publications.explorePageSynapseObject,
            },
          },
        ],
      },
    ],
  },
  {
    to: 'About',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        className: 'AboutPage',
        props: {
          ownerId: 'syn22130826',
        },
      },
    ],
  },
]

export default routes
