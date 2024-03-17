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
  const [isGoal, setIsGoal] = useState(false)

 
  return (
    <div className={`${s.assetDistributionContainer} ${s.tile}`}>
      <div className={s.tileHeader}>
        <h2>Asset Distribution</h2>
      </div>
      <div id="asset-dist">
        <AssetDistributionGraph isGoalData={isGoal} />
      </div>
    </div>
  )
}
