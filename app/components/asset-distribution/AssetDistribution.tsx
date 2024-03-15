import React, { useContext, useState } from 'react'
import s from './AssetDistribution.module.scss'
// import 'anychart'
import { PocketsmithContext } from '@/app/contexts/PocketsmithProvider'
import { TestGraph3 } from '../graphs/TestGraph3'
import { AssetDistributionGraph } from '../graphs/AssetDistributionGraph'

export interface GraphData {
  key: string
  value: number
}

export const AssetDistribution = () => {
  // const { addedAccountdata } = useContext(PocketsmithContext)
  const [isGoal, setIsGoal] = useState(false)

  // console.log(addedAccountdata.accountGroups)

  // let initialData: GraphData[] = []
  // let assetData: GraphData[] = []

  // // let assetChart = anychart.pie(assetData)

  // const initData = () => {
  //   addedAccountdata.accountGroups.map((group) => {
  //     initialData.push({
  //       key: group.name,
  //       value: group.groupBalance
  //     })
  //   })
  //   assetData = initialData

  //   return initialData
  // }

  // initData()

  // const palette = anychart.palettes.distinctColors()

  // palette.items([
  //   '#DD614A',
  //   '#4E878C',
  //   '#65B891',
  //   '#93E5AB',
  //   '#B5FFE1',
  //   '#F48668'
  // ])

  // assetChart.background().fill('transparent')
  // assetChart.palette(palette)
  // assetChart.innerRadius('40%')
  // assetChart.legend().enabled(false)

  // var labels = assetChart.labels()
  // labels.format('{%x}')
  // labels.fontColor('white')
  // labels.fontSize(14)
  // labels.fontFamily('Overpass')

  // // tooltips
  // var tooltip = assetChart.tooltip()
  // tooltip.title().fontFamily('Overpass')
  // tooltip.fontFamily('Overpass')
  // tooltip.useHtml(true)
  // tooltip.format(
  //   'Value: {%value}{decimalsCount:2, groupsSeparator:\\.} NZ$<br/>Percent: {%yPercentOfTotal}{decimalsCount:2, groupsSeparator:\\,}%'
  // )

  return (
    <div className={`${s.assetDistributionContainer} ${s.tile}`}>
      <div className={s.tileHeader}>
        <h2>Asset Distribution</h2>
        {/* <div className={s.toggleContainer}>
          <span id="actual" className={s.toggleLabel}>
            Actual
          </span>
          <div
            id="asset-dist-toggle"
            className={`${s.toggle} ${isGoal ? s.active : ''}`}
            onClick={() => {
              setIsGoal(!isGoal)
            }}
          >
            <div className="toggle-inner"></div>
          </div>
          <span id="goal" className={s.toggleLabel}>
            Goal
          </span>
        </div> */}
      </div>
      <div id="asset-dist">
        <AssetDistributionGraph isGoalData={isGoal} />
        {/* <TestGraph3 /> */}
      </div>
    </div>
  )
}
