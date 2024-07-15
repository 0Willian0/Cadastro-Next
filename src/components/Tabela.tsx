import Cliente from "../core/Cliente"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente)=>void
    clienteExcluido?: (cliente:Cliente)=>void
}

export default function Tabela(props:TabelaProps){
    
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="text-left p-4">Acoes</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i)=>{
            return(
                <tr key={cliente.id} 
                className={`${i%2==0?'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado?(<button onClick={()=> props.clienteSelecionado?.(cliente)} className="
                flex justify-center items-center
                 bg-green-500 rounded-full
                 p-2 hover:bg-green-400">Edit</button>):false}
                
                {props.clienteExcluido?(<button onClick={()=>props.clienteExcluido?.(cliente)}className="flex justify-center 
                items-center bg-red-500 rounded-full
                p-2 hover:bg-red-400">Delete</button>):false}
                
            </td>
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}