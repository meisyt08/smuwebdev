import Image from "next/image";

export default function StartPage() {
    return (
        <div style={{position: 'relative', width: '100%', height: '100vh'}}>
             <Image
                src="/1.png"
                layout="fill"
                objectFit="cover"
                alt="background pic"
                />
        </div>
       
    )
}