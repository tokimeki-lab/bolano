'use server'

import prisma from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getCostume = unstable_cache(async (id: number) => {
  return prisma.costumes.findFirst({
    where: {
      id,
    },
  })
})

export const getCostumeModel = unstable_cache(async (id: number) => {
  return prisma.costume_models.findFirst({
    where: {
      id,
    },
  })
})

export const listCostumeModelIds = unstable_cache(async () => {
  return prisma.costume_models.findMany({
    select: {
      id: true,
    },
  })
})
