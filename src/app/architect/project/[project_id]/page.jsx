//import { useRouter } from "next/router"

export default function ({params}) {
    console.log(params);
    
    //const router = useRouter()

    return (
        <div>
            <h1>Página projeto</h1>
            <p>{params.project_id}</p>
        </div>
    )
}