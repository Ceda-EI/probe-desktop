import React from 'react'

import moment from 'moment'

import styled from 'styled-components'

// XXX replace this with the correct icon
import MdArrowUpward from 'react-icons/lib/md/arrow-upward'
import MdArrowDownward from 'react-icons/lib/md/arrow-downward'
import HumanFilesize from './HumanFilesize'


import MdFlag from 'react-icons/lib/md/flag'
import MdTimer from 'react-icons/lib/md/timer'
import MdSwapVert from 'react-icons/lib/md/swap-vert'
import MdPublic from 'react-icons/lib/md/public'

import {
  Heading,
  Text,
  Container,
  Flex,
  Box,
  Divider
} from 'ooni-components'

import { testGroups } from '../nettests'

import StatsOverview from './StatsOverview'
import MeasurementRow from './MeasurementRow'
import BackButton from '../BackButton'
import TwoColumnTable from './TwoColumnTable'
import StickyDraggableHeader from '../StickyDraggableHeader'

const ResultOverviewContainer = styled.div`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.white};
`

// XXX groupName is also passed in
const ResultOverview = ({groupName, testKeys, anomalyCount, totalCount, startTime, dataUsageUp, dataUsageDown, runtime, networkName, countryCode, asn}) => {
  return (
    <ResultOverviewContainer>
      <Flex justifyContent='center' alignItems='center'>
        <Box>
          <BackButton />
        </Box>
        <Box width={1}>
          <Heading center h={3}>{startTime && moment(startTime).format('lll')}</Heading>
        </Box>
      </Flex>
      <Container style={{padding: '20px 60px'}}>

        <StatsOverview name={groupName} testKeys={testKeys} anomalyCount={anomalyCount} totalCount={totalCount} />
        <Divider mt={4} mb={4} />

        <TwoColumnTable
          left={<Text><MdSwapVert size={20} />Data Usage</Text>}
          right={<Flex>
            <HumanFilesize icon={<MdArrowUpward size={20}/>} size={dataUsageUp*1024} fontSize={20} />
            <HumanFilesize icon={<MdArrowDownward size={20}/>} size={dataUsageDown*1024} fontSize={20} />
          </Flex>} />

        <TwoColumnTable
          left={<Text><MdTimer size={20} />Total runtime</Text>}
          right={<Text>{runtime.toFixed(2)} s</Text>} />

        <TwoColumnTable
          left={<Text><MdFlag size={20} />Country</Text>}
          right={<Text>{countryCode}</Text>} />

        <TwoColumnTable
          left={<Text><MdPublic  size={20} />Network</Text>}
          right={<Text>{networkName} ({asn})</Text>} />
      </Container>
    </ResultOverviewContainer>
  )
}

const MeasurementList = ({groupName, measurements}) => {
  return (
    <Flex flexWrap='wrap' style={{width: '100%'}}>
      <Box width={1}>
        {measurements.map(m => <MeasurementRow key={m.id} measurement={m} groupName={groupName} />)}
      </Box>
    </Flex>
  )
}

const mapOverviewProps = (rows, summary) => {
  let msmt = {},
    testKeys = {}
  if (rows.length > 0) {
    msmt = rows[0]
  }
  const groupName = msmt.test_group_name || 'default'
  if (groupName === 'performance') {
    rows.forEach(row => {
      if (row.test_keys) {
        testKeys = Object.assign({}, testKeys, JSON.parse(row.test_keys))
      }
    })
  }
  return {
    groupName,
    group: testGroups[groupName],
    testKeys: testKeys,
    startTime: msmt.start_time || null,
    dataUsageUp: summary.data_usage_up || 0,
    dataUsageDown: summary.data_usage_down || 0,
    anomalyCount: summary.anomaly_count || 0,
    totalCount: summary.total_count || 0,
    runtime: summary.total_runtime || 0,
    networkName: msmt.network_name || '',
    countryCode: msmt.network_country_code || '',
    asn: msmt.asn || '',
  }
}

const TestResultsOverview = ({ rows, summary }) => {
  const overviewProps = mapOverviewProps(rows, summary)

  return (
    <StickyDraggableHeader
      color={overviewProps.group.color}
      colorSticky={overviewProps.group.color}
      height='auto'
      header={<ResultOverview {...overviewProps} />} >
      <MeasurementList groupName={overviewProps.groupName} group={overviewProps.group} measurements={rows} />
    </StickyDraggableHeader>
  )
}

export default TestResultsOverview
