import { getDictionary } from '@/app/i18n/dictionaries'
import Link from 'next/link'

const Footer = async () => {
  const { common } = await getDictionary()
  return (
    <footer className="grid gap-4 p-32 text-center">
      <div className="">
        <Link href="https://tokiken.com" className="text-xs text-gray-500">
          {common.title}
        </Link>
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="https://twitter.com/kusabure" target="_blank" className="text-xs text-gray-500">
          Twitter
        </Link>
      </div>
    </footer>
  )
}

export default Footer
