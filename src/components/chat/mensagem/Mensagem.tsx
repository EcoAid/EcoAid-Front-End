import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";

function Mensagem(props: any) {

    const { usuario } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [props.mensagem]);

    function timeAgo(input) {
        const date = (input instanceof Date) ? input : new Date(input);
        const formatter = new Intl.RelativeTimeFormat('pt-BR');
        const ranges = [
            ['years', 3600 * 24 * 365],
            ['months', 3600 * 24 * 30],
            ['weeks', 3600 * 24 * 7],
            ['days', 3600 * 24],
            ['hours', 3600],
            ['minutes', 60],
            ['seconds', 1],
        ] as const;
        const secondsElapsed = (date.getTime() - Date.now()) / 1000;

        for (const [rangeType, rangeVal] of ranges) {
            if (rangeVal < Math.abs(secondsElapsed)) {
                const delta = secondsElapsed / rangeVal;
                return formatter.format(Math.round(delta), rangeType);
            }
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div ref={ref} className={`flex ${props.mensagem.remetenteId === usuario.id && 'flex-row-reverse'} w-full gap-4`}>
                <div className="flex flex-col">
                    <img className='h-8 w-8 rounded-full object-cover' src={props.mensagem.remetenteId === usuario.id
                        ? usuario.foto
                        : data.usuario.foto} alt="" />
                </div>
                <div className={`${props.mensagem.remetenteId === usuario.id ? 'pl-12' : 'pr-12'}`}>
                    <p className={`py-3 px-4 break-all w-fit ${props.mensagem.remetenteId === usuario.id ? 'bg-violetblue text-white rounded-l-xl' : 'bg-white rounded-r-xl'} text-sm rounded-b-xl shadow-sm`}>{props.mensagem.texto}</p>
                </div>
            </div>
            <p className={`text-gray-400 w-full font-thin text-xs ${props.mensagem.remetenteId === usuario.id && 'text-right'}`}>
                {Math.round(((props.mensagem.date).toDate() - Date.now()) / (1000 * 60)) === 0 ? 'Agora mesmo'
                    : timeAgo((props.mensagem.date).toDate())}</p>
        </div>
    )
}

export default Mensagem