import React, { useState } from 'react'
import { Bucket } from './bucket/Bucket'
import s from './BucketStrategy.module.scss'

export const BucketStrategy = () => {
  return (
    <div className={s.bucketContainer}>
      <Bucket title="Bucket 1" subtitle="Short Term Goals">
        <div className={`${s.bucket} ${s.bucketFront} ${s.bucket1}`}>
          <div className={`${s.part} ${s.part1}`}>
            <h3>100%</h3>
            <br />
            <span>
              Low Risk
              <br />
              Kiwibank Notice Saver
            </span>
          </div>
        </div>
        <div className={`${s.bucket} ${s.bucketBack} ${s.bucket1}`}>
          <div className={`${s.part} ${s.part1}`}>
            <span>Kiwibank Notice Saver</span>
            <br />
            <h3 id="bucket-1-amount"></h3>
          </div>
        </div>
      </Bucket>
      <Bucket title="Bucket 2" subtitle="Medium Term Goals">
        <div className={`${s.bucket} ${s.bucketFront} ${s.bucket2}`}>
          <div className={`${s.part} ${s.part2}`}>
            <h3>50%</h3>
            <br />
            <span>
              Medium Risk
              <br />
              AMP global fixed interest fund
            </span>
          </div>
          <div id="part-2">
            <div className={s.part} id="part-2-0">
              <h3>50%</h3>
              <br />
              <span>High Risk</span>
            </div>
            <div id="part-2-1">
              <div className={s.part} id="part-2-1-0">
                <h3>70%</h3>
                <br />
                <span>Total World Fund</span>
              </div>
              <div className={s.part} id="part-2-1-1">
                <h3>20% </h3>
                <span>NZ 50 Fund</span>
              </div>
              <div className={s.part} id="part-2-1-2">
                <h3>10% </h3>
                <span>US Value Fund</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.bucket} ${s.bucketBack}`} id="bucket-2">
          <div className={s.part} id="part-1">
            <h3>50%</h3>
            <br />
            <span>
              Medium Risk
              <br />
              AMP global fixed interest fund
            </span>
          </div>
          <div id="part-2">
            <div className={s.part} id="part-2-0">
              <h3>50%</h3>
              <br />
              <span>High Risk</span>
            </div>
            <div id="part-2-1">
              <div className={s.part} id="part-2-1-0">
                <h3>70%</h3>
                <br />
                <span>Total World Fund</span>
              </div>
              <div className={s.part} id="part-2-1-1">
                <h3>20% </h3>
                <span>NZ 50 Fund</span>
              </div>
              <div className={s.part} id="part-2-1-2">
                <h3>10% </h3>
                <span>US Value Fund</span>
              </div>
            </div>
          </div>
        </div>
      </Bucket>

      <Bucket title="Bucket 3" subtitle="Long Term Goals">
        <div className={`${s.bucket} ${s.bucketFront}`} id="bucket-3">
          <div className={s.part} id="part-1">
            <h3>70%</h3>
            <br />
            <span>
              High Risk
              <br />
              Total World Fund
            </span>
          </div>
          <div className={s.part} id="part-2">
            <h3>20% </h3>
            <span>
              Medium Risk
              <br />
              NZ 50 Fund
            </span>
          </div>
          <div className={s.part} id="part-3">
            <h3>10% </h3>
            <span>High Risk - US Value Fund</span>
          </div>
        </div>
        <div className={`${s.bucket} ${s.bucketBack}`} id="bucket-3">
          <div className={s.part} id="part-1">
            <h3>70%</h3>
            <br />
            <span>
              High Risk
              <br />
              Total World Fund
            </span>
          </div>
          <div className={s.part} id="part-2">
            <h3>20% </h3>
            <span>
              Medium Risk
              <br />
              NZ 50 Fund
            </span>
          </div>
          <div className={s.part} id="part-3">
            <h3>10% </h3>
            <span>High Risk - US Value Fund</span>
          </div>
        </div>
      </Bucket>
    </div>
  )
}
