import s from './AssetDistribution.module.scss'

export const AssetDistribution = () => {
  return (
    <div className={`${s.assetDistributionContainer} ${s.tile}`}>
        <div className={s.tileHeader}>
            <h2>Asset Distribution</h2>
            <div className={s.toggleContainer}>
                <span id="actual" className={s.toggleLabel}>Actual</span>
                {/* <div id="asset-dist-toggle" className={`toggle ${isGoal ? 'active' : ''}`} onClick={() => {setIsGoal(!isGoal)}}>
                    <div className="toggle-inner"></div>
                </div> */}
                <span id="goal" className={s.toggleLabel}>Goal</span>
            </div>
        </div>
        <div id="asset-dist">
        {/* <AnyChart 
            instance={assetChart}
            data={isGoal ? Data.goalDistribution : initialData}
            id="asset-dist"
            height={400}
        /> */}
        </div>
        </div>
  )
}