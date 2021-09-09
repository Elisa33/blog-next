import Image from 'next/image';

export default function PostPrincipal() {
    return (
        <div>
            <h1>Post principal</h1>
            <Image 
            src='/img/photo-m.jpg'
            width={328}
            height={203}
            alt="" />
        </div>
    )
}
