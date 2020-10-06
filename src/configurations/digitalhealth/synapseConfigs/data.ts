import { HomeExploreConfig } from 'types/portal-config'
import facetAliases from '../facetAliases'
import { LabelLinkConfig } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { StandaloneQueryWrapperProps } from 'portal-components/StandaloneQueryWrapper'
import { dataSql } from '../resources'

const unitDescription = 'Data'
const rgbIndex = 0
const facet = 'Program'
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'dataDescriptionLocation',
    isMarkdown: true,
  },
  {
    matchColumnName: 'dataAccessInstructions',
    isMarkdown: true,
  },
  {
    matchColumnName: 'studyOrProject',
    isMarkdown: true,
  },
]

const data: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      unitDescription,
      rgbIndex,
      facet,
      link: 'Explore/Studies',
      linkText: 'Explore Studies',
      sql: dataSql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      shouldDeepLink: true,
      hideDownload: true,
      sql: dataSql,
      name: 'Data',
      facetAliases,
      tableConfiguration: {
        columnLinks: dataColumnLinks,
      },
      facetsToPlot: [
        'study',
        'reportedOutcome',
        'dataCollectionMethod',
        'deviceType',
        'devicePlatform',
        'deviceLocation',
        'diagnosis',
        'digitalAssessmentCategory',
        'dataType',
        'dataSubtype',
      ],
      searchConfiguration: {
        searchable: [
          'studyOrProject',
          'reportedOutcome',
          'devicePlatform',
          'diagnosis',
          'digitalAssessmentCategory',
          'digitalAssessmentDetails',          
        ],
      },
    },
  },
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  title: 'Data Files',
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: '=',
}

export default data
