import React, { useState } from 'react'
import s from './AssetDistribution.module.scss'
// import 'anychart'
import { AssetDistributionBarGraph } from '../graphs/AssetDistributionBarGraph'

export interface GraphData {
  key: string
  value: number
}

export const AssetDistribution = () => {
  return (
    <div className={`${s.assetDistributionContainer} ${s.tile}`}>
      <div className={s.tileHeader}>
        <h2>Asset Distribution</h2>
      </div>
      <div id="asset-dist">
        <AssetDistributionBarGraph />
      </div>
    </div>
  )
}
