import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCostume, getCostumeModel } from '../../../actions/costume'
import Title from '../Title'
import LiDARViewer from './GLBModelView'

type Props = {
  modelId?: number
}

const CostumeModelLoader = async ({ modelId }: Props) => {
  if (!modelId) {
    notFound()
  }
  const model = await getCostumeModel(modelId)
  if (!model) {
    notFound()
  }
  const costume = await getCostume(model.costume_id)
  if (!costume) {
    notFound()
  }
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-center">
        <Title title={costume?.name} />
      </div>
      <div className="w-full max-w-md text-xs text-gray-500">
        <div className="flex gap-1">
          <span>衣装名:</span>
          <Link href={`https://tokiken.com/costumes/${costume.id}`} className="text-blue-500">
            {costume.name}
          </Link>
        </div>
        <div className="flex gap-1">
          <span>撮影者:</span>
          <Link href={model.credit_url} target="_blank" className="text-blue-500">
            {model.credit}
          </Link>
        </div>
        {model.description && <div>{model.description}</div>}
      </div>
      <LiDARViewer modelUrl={model.url} />
    </div>
  )
}

export default CostumeModelLoader
