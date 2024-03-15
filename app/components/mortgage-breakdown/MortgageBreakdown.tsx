import { MortgageGraph } from '../graphs/MortgageGraph'

export const MortgageBreakdown = () => {
  return (
    <>
      <div className="col1-container">
        <div id="mortgage-breakdown-container">
          <MortgageGraph />
        </div>
      </div>
      {/* <div className='divider'></div> */}
      <h2 className="section-title">Mortgage Repayment Progress</h2>
      <div className="col1-container">
        <div id="mortgage-breakdown-container-2"></div>
      </div>
    </>
  )
}
