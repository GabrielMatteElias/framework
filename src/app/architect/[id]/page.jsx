//import { useRouter } from "next/router"

export default function ({params}) {
    console.log(params);
    
    //const router = useRouter()

    return (
        <div>
            <h1>Página Arquiteto</h1>
            <p>{params.id}</p>
        </div>
    )
}