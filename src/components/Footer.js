// ** Next
import Link from "next/link"

// ** Icons
import { EmailIcon, WhatsAppIcon } from "./Icons"

// ** Components
import InfoBox from "./InfoBox"
import Layout from "./Layout"

const Footer = () => {
    return (
        <div
            className="w-full border-t-2 border-solid border-[#e6e6e6] font-medium text-lg dark:text-light dark:border-[#3f3f3f]"
        >
            <Layout className='!py-3 flex items-center justify-between lg:flex-col lg:gap-5 lg:items-stretch'>

                <Link href={'mailto:aliafarinifard@outlook.com'}>
                    <InfoBox icon={<EmailIcon className='w-8 h-8 fill-[#525252] dark:fill-light' />} title="Email" text="aliafarinifard@outlook.com" />
                </Link>

                <Link href={'tel:0098-993-149-8394'}>
                    <InfoBox icon={<WhatsAppIcon className='w-8 h-8 fill-[#525252] dark:fill-light' />} title="Whatsapp | Telegram" text="0098-993-149-8394" />
                </Link>

                <p className="font-medium">
                    Ali Afarinifard | <span className="font-bold underline">Front End</span> Developer
                </p>

            </Layout>
        </div>
    )
}

export default Footer