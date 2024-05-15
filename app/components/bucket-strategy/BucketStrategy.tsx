import React from 'react'
import { Bucket } from './buckets/Bucket'
import s from './BucketStrategy.module.scss'
import { Bucket1Back } from './buckets/bucket-1/Bucket1Back'
import { Bucket1Front } from './buckets/bucket-1/Bucket1Front'
import { Bucket2Front } from './buckets/bucket-2/Bucket2Front'
import { Bucket2Back } from './buckets/bucket-2/Bucket2Back'
import { Bucket3Back } from './buckets/bucket-3/Bucket3Back'
import { Bucket3Front } from './buckets/bucket-3/Bucket3Front'

export const BucketStrategy = () => {
  return (
    <div className={s.bucketContainer}>
      <Bucket
        title="Bucket 1"
        subtitle="Short Term Goals"
        childrenFront={<Bucket1Front />}
        childrenBack={<Bucket1Back />}
      ></Bucket>

      <Bucket
        title="Bucket 2"
        subtitle="Medium Term Goals"
        childrenFront={<Bucket2Front />}
        childrenBack={<Bucket2Back />}
      ></Bucket>

      <Bucket
        title="Bucket 3"
        subtitle="Long Term Goals"
        childrenFront={<Bucket3Front />}
        childrenBack={<Bucket3Back />}
      ></Bucket>
    </div>
  )
}
